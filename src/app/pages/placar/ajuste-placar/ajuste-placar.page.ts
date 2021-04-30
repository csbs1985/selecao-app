import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Placar } from 'src/app/classes/placar';

@Component({
  selector: 'app-ajuste-placar',
  templateUrl: './ajuste-placar.page.html',
  styleUrls: ['./ajuste-placar.page.scss'],
})
export class AjustePlacarPage implements OnInit {
  readonly textoCabecalho = 'Ajustar placa e cronômetro';
  readonly textoBotao = 'Confirmar';
  
  formPlacar: FormGroup;

  periodosArray = {
    name: 'periodos',
    checked: 2,
    valor: [1, 2]
  };

  duracaoArray = {
    name: 'duracao',
    checked: 45,
    valor: [10, 15, 20, 25, 30, 35, 40, 45]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
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
    });
  }

  bataoResposta(): void {
    console.log(this.formPlacar.value);

    // Usar o método reset para limpar os controles na tela
    // this.formPlacar.reset(new Placar());

    this.router.navigate(['/placar']);
  }

  get isCronometro(): any {
    return this.formPlacar.get('cronometro').value;
  }

}
