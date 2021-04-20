import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelecionarPage } from './selecionar.page';
import { AjusteSelecionarPage } from './ajuste-selecionar/ajuste-selecionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    SelecionarPage,
    AjusteSelecionarPage  ]
})
export class SelecionarPageModule { }
