import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaiementPage } from './paiement';

@NgModule({
  declarations: [
    PaiementPage,
  ],
  imports: [
    IonicPageModule.forChild(PaiementPage),
  ],
})
export class PaiementPageModule {}
