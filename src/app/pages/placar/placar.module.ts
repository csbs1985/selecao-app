import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlacarPage } from './placar.page';
import { AjustePlacarPage } from './ajuste-placar/ajuste-placar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    PlacarPage,
    AjustePlacarPage
  ],
  exports: [
    PlacarPage,
    AjustePlacarPage
  ]
})
export class PlacarPageModule {}
