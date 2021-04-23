import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajuste-selecionar',
  templateUrl: './ajuste-selecionar.page.html',
  styleUrls: ['./ajuste-selecionar.page.scss'],
})
export class AjusteSelecionarPage implements OnInit {
  readonly textoCabecalho = 'Ajustar placa e cronômetro';
  readonly textoBotao = 'Confirmar';

  periodosArray = {
    name: 'periodo',
    checked: 2,
    valor: [
      1, 2
    ]
  }

  duracaoArray = {
    name: 'duracao',
    checked: 45,
      valor: [
        10, 15, 20, 25, 30, 35, 40, 45
      ]
  }

  constructor() { }

  ngOnInit() { }

  bataoResposta(event): void {
    alert(event);
  }
}
