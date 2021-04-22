import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelecionarPage } from './selecionar.page';
import { AjusteSelecionarPage } from './ajuste-selecionar/ajuste-selecionar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [
    SelecionarPage,
    AjusteSelecionarPage  ]
})
export class SelecionarPageModule { }
