import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecryptComponent } from './components/decrypt/decrypt.component';
import { EncryptComponent } from './components/encrypt/encrypt.component';
import { APP_ROUTES } from './core/constants/common.const';

const routes: Routes = [
  { path: APP_ROUTES.ENCRYPT, component: EncryptComponent },
  { path: APP_ROUTES.DECRYPT, component: DecryptComponent },
  { path: '**', component: EncryptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
