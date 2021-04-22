import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPage } from './inicio.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [InicioPage],
  providers: [
    StatusBar
  ]
})
export class InicioPageModule { }
