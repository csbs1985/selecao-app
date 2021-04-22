import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-ajuste-selecionar',
  templateUrl: './ajuste-selecionar.page.html',
  styleUrls: ['./ajuste-selecionar.page.scss'],
})
export class AjusteSelecionarPage implements OnInit {
  readonly textoCabecalho = 'Ajustar placa e cronômetro';
  readonly textoBotao = 'Confirmar';

  constructor(private statusBar: StatusBar) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#58B187');
  }

  bataoResposta(event): void { 
    alert(event);
  }
}
