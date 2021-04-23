import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajuste-selecionar',
  templateUrl: './ajuste-selecionar.page.html',
  styleUrls: ['./ajuste-selecionar.page.scss'],
})
export class AjusteSelecionarPage implements OnInit {
  readonly textoCabecalho = 'Ajustar placa e cronômetro';
  readonly textoBotao = 'Confirmar';

  constructor() { }

  ngOnInit() { }

  bataoResposta(event): void {
    alert(event);
  }
}
