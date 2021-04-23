import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Placar } from 'src/app/models/placar';

@Component({
  selector: 'app-ajuste-selecionar',
  templateUrl: './ajuste-selecionar.page.html',
  styleUrls: ['./ajuste-selecionar.page.scss'],
})
export class AjusteSelecionarPage implements OnInit {
  formPlacar: FormGroup;

  readonly textoCabecalho = 'Ajustar placa e cronômetro';
  readonly textoBotao = 'Confirmar';

  periodosArray = {
    name: 'periodos',
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

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.criarForm(new Placar());
  }

  criarForm(placar: Placar) {
    this.formPlacar = this.formBuilder.group({
      mandante: [placar.mandante],
      visitante: [placar.visitante],
      cronometro: [placar.cronometro],
      periodos: [placar.periodos],
      duracao: [placar.duracao]
    })
  }

  bataoResposta(): void {
    alert(this.formPlacar.value.mandante);
    console.log(this.formPlacar.value);

    // Usar o método reset para limpar os controles na tela
    // this.formCliente.reset(new Cliente());
  }

  get isCronometro(): any {
    return this.formPlacar.get('cronometro').value;
  }
}
