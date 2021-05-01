import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Time } from 'src/app/classes/time';

@Component({
  selector: 'app-ajuste-selecionar',
  templateUrl: './ajuste-selecionar.page.html',
  styleUrls: ['./ajuste-selecionar.page.scss'],
})
export class AjusteSelecionarPage implements OnInit {
  readonly textoCabecalho = 'Ajuste e seleção de times';
  readonly textoBotao = 'Confirmar';

  formTime: FormGroup;

  atleta = '';

  qtdTimesArray = {
    name: 'qtdTime',
    checked: 2,
    valor: [1, 2, 3, 4, 5, 6]
  };

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.criarForm(new Time());
  }

  criarForm(time: Time) {
    this.formTime = this.formBuilder.group({
      qtdTime: [time.qtdTime],
      jogadores: this.formBuilder.array([time.jogadores]),
      goleiro: [time.goleiro]
    });
  }

  adicionarAtleta(): void {
    this.formTime.value.jogadores.push(this.atleta);
    this.atleta = '';
  }

  removerAtleta(atleta): void {
    const index = this.formTime.value.jogadores.indexOf(atleta, 0);
    if (index > -1) {
      this.formTime.value.jogadores.splice(index, 1);
    }
  }

  botaoConfirmar(): void {
    console.log(this.formTime.value);
  }

  get placeholder(): string {
    return this.formTime.value.jogadores <= 0 ? 'Quem vai joga?' : '+1';
  }

  get numAtletas(): number {
    return this.formTime.value.jogadores.l;
  }
}
