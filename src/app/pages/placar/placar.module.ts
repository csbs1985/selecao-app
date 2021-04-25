import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ComponentsModule } from "src/app/components/components.module";
import { AjustePlacarPage } from "./ajuste-placar/ajuste-placar.page";
import { PlacarPage } from "./placar.page";
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [
    PlacarPage,
    AjustePlacarPage
  ],
  exports: [
    PlacarPage,
    AjustePlacarPage
  ],
  providers: [
    ScreenOrientation,
    Insomnia
  ]
})
export class PlacarPageModule {}
