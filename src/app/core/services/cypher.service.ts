import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CypherService {

  constructor() { }

  private hash(secretKey:string, bits: number) {
      return CryptoJS.SHA3(secretKey, { outputLength: bits }).toString();
  }

  encrypt(secretKey:string, content: string): string {
    const secretHash = this.hash(secretKey, 512);

    return CryptoJS.AES.encrypt(content, secretHash).toString();
  }
  
  decrypt(secretKey:string, encryptedContent: string): string {
    const secretHash = this.hash(secretKey, 512);

    return CryptoJS.AES.decrypt(encryptedContent, secretHash).toString()
  }
}
