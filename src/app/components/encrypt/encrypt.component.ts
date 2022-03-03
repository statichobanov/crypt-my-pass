import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CypherService } from 'src/app/core/services/cypher.service';

interface JsonFormatFile {
  platform: string;
  password: string;
  passphrases?: string;
}

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss'],
})
export class EncryptComponent implements OnInit {
  private encryptedFileContent!: string;

  fileContent: string = '';
  fileContentArray!: JsonFormatFile[];
  encryptedFileDownloadUrl!: Object;

  secretkeyForm!: FormGroup;
  secretKeyControl!: FormControl;
  secretKeyConfirmControl!: FormControl;

  constructor(private fb: FormBuilder, private cypherService: CypherService, private sanitizer: DomSanitizer) {
    this.secretkeyForm = this.fb.group({
      secretKey: (this.secretKeyControl = this.fb.control('', [
        Validators.required,
        Validators.maxLength(42),
        Validators.minLength(8),
      ])),
      secretKeyConfirm: (this.secretKeyConfirmControl = this.fb.control('', [
        Validators.required,
        Validators.maxLength(42),
        Validators.minLength(8),
      ])),
    });
  }

  ngOnInit(): void {
    this.secretKeyConfirmControl.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => {
        if (this.secretKeyControl.value !== value) {
          this.secretKeyConfirmControl.setErrors({ match: false });
          this.secretkeyForm.setErrors({ invalid: true });
        }
      });
  }

  async upload(file: Blob) {
    this.fileContent = (await this.getFile(file)).toString();

    /* try {
      this.fileContentArray = JSON.parse(this.fileContent);
    } catch (error) {
      console.warn('file is not in JSON format');
    } finally {
    } */
  }

  async getFile(file: Blob): Promise<string | ArrayBuffer> {
    const reader: FileReader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.readAsText(file);

      reader.onload = () => {
        if (reader?.result) {
          resolve(reader.result);
        } else {
          reject();
        }
      };
    });
  }

  onSubmit(): void {
    // In case user clicks submit faster than the debounce time
    if(this.secretKeyControl.value !== this.secretKeyConfirmControl.value) {
      this.secretKeyConfirmControl.setErrors({ match: false });

      return;
    }

    this.encryptedFileContent = this.cypherService.encrypt(
      this.secretKeyControl.value,
      this.fileContent
    );

    const blob = new Blob([this.encryptedFileContent], { type: 'application/octet-stream' } )
    this.encryptedFileDownloadUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );
  }
}
