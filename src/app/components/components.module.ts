import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BotaoComponent } from './botao/botao.component';
import { RelogioComponent } from './relogio/relogio.component';
import { ResumoCentroComponent } from './resumo-centro/resumo-centro.component';
import { ResumoEsquerdoComponent } from './resumo-esquerdo/resumo-esquerdo.component';
import { ResumoDireitoComponent } from './resumo-direito/resumo-direito.component';

@NgModule({
  declarations: [
    BotaoComponent,
    CabecalhoComponent,
    RelogioComponent,
    ResumoCentroComponent,
    ResumoEsquerdoComponent,
    ResumoDireitoComponent
  ],
  exports: [
    BotaoComponent,
    CabecalhoComponent,
    RelogioComponent,
    ResumoCentroComponent,
    ResumoEsquerdoComponent,
    ResumoDireitoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
