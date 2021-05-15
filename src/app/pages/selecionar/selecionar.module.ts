import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelecionarPage } from './selecionar.page';
import { AjusteTimePage } from './ajuste-time/ajuste-time.page';
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
    AjusteTimePage
  ]
})
export class SelecionarPageModule { }
