import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BotaoComponent } from './botao/botao.component';
import { RelogioComponent } from './relogio/relogio.component';

@NgModule({
  declarations: [
    BotaoComponent,
    CabecalhoComponent,
    RelogioComponent
  ],
  exports: [
    BotaoComponent,
    CabecalhoComponent,
    RelogioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
