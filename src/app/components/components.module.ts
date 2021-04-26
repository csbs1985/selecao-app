import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [
    BotaoComponent,
    CabecalhoComponent
  ],
  exports: [
    BotaoComponent,
    CabecalhoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
