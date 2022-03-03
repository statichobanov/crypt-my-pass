import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* primeng modules */
import {SpeedDialModule} from 'primeng/speeddial';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';

/* components */
import { EncryptComponent } from './components/encrypt/encrypt.component';
import { AppFooterComponent } from './layout/app-footer';
import { AppNavigationComponent } from './layout/app-navigation';
import { DecryptComponent } from './components/decrypt/decrypt.component';

@NgModule({
  declarations: [
    AppComponent,
    EncryptComponent,
    AppFooterComponent,
    AppNavigationComponent,
    DecryptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordModule,
    DividerModule,
    BrowserAnimationsModule,
    ButtonModule,
    FileUploadModule,
    SpeedDialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
