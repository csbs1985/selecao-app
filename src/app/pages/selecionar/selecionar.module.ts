import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelecionarPage } from './selecionar.page';
import { AjusteSelecionarPage } from './ajuste-selecionar/ajuste-selecionar.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    SelecionarPage,
    AjusteSelecionarPage
  ]
})
export class SelecionarPageModule { }
