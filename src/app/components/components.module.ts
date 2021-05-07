import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BotaoComponent } from './botao/botao.component';
import { ResumoItemComponent } from './resumo-item/resumo-item.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    BotaoComponent,
    CabecalhoComponent,
    ResumoItemComponent,
    ModalComponent
  ],
  exports: [
    BotaoComponent,
    CabecalhoComponent,
    ResumoItemComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
