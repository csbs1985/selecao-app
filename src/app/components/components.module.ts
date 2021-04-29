import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BotaoComponent } from './botao/botao.component';
import { ResumoItemComponent } from './resumo-item/resumo-item.component';

@NgModule({
  declarations: [
    BotaoComponent,
    CabecalhoComponent,
    ResumoItemComponent
  ],
  exports: [
    BotaoComponent,
    CabecalhoComponent,
    ResumoItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
