import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Resumo } from 'src/app/models/resumo.model';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
})
export class ResumoPage implements OnInit {

  readonly textoCabecalho = 'Resumão da partida';
  readonly textoBotao = 'Voltar ao jogo';

  resumoArray = [];

  // memoriaResumo = this.memoriaService.memoriaResumo;
  resumoItens: Resumo;

  mandanteNome = this.memoriaService.memoriaPlacar.mandanteNome;
  mandantePonto = this.memoriaService.memoriaPlacar.mandantePonto;
  visitanteNome = this.memoriaService.memoriaPlacar.visitanteNome;
  visitantePonto = this.memoriaService.memoriaPlacar.visitantePonto;

  constructor(
    private location: Location,
    private memoriaService: MemoriaService
  ) { }

  ngOnInit() {
    this.popularResumo();
  }

  popularResumo(): void {
    if (this.memoriaService.memoriaResumo.length <= 0) {
      const itemInicio = {
        tipo: 'inicio',
        placar: 0 + ' x ' + 0,
        texto: 'Inicio',
        cronometro: '1° tempo'
      };

      this.resumoArray.push(itemInicio);
      return;
    }

    this.resumoArray.push(this.memoriaService.memoriaResumo);
  }

  botaoVoltar(): void {
    this.location.back();
  }
}
