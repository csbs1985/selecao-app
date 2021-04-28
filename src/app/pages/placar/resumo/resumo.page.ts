import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
})
export class ResumoPage implements OnInit {

  readonly textoCabecalho = 'Resumão da partida';
  readonly textoBotao = 'Voltar ao jogo';

  mandanteNome = 'Mandante';
  visitanteNome = 'Visitante';
  mandantePonto = 2;
  visitantePonto = 1;

  resumoArray = [
    {
      tipo: 'final',
      placar: '0 x 0',
      texto: 'Inicio',
      data: '1° tempo',
      cronometro: '14:28'
    },
    {
      tipo: 'mandante',
      placar: '0 x 0',
      texto: 'Inicio',
      data: '1° tempo',
      cronometro: '14:28'
    },
    {
      tipo: 'visitante',
      placar: '0 x 0',
      texto: 'Inicio',
      data: '1° tempo',
      cronometro: '14:28'
    }, {
      tipo: 'inicio',
      placar: '0 x 0',
      texto: 'Inicio',
      data: '1° tempo',
      cronometro: '14:28'
    }
  ];

  constructor(
    private location: Location
  ) { }

  ngOnInit() { }

  botaoVoltar(): void {
    this.location.back();
  }
}
