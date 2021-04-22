import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioPageModule } from './pages/inicio/inicio.module';
import { PlacarPageModule } from './pages/placar/placar.module';
import { SelecionarPageModule } from './pages/selecionar/selecionar.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    InicioPageModule,
    PlacarPageModule,
    SelecionarPageModule
  ],
  providers: [
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
