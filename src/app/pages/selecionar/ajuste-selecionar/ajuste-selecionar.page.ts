import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Time } from 'src/app/classes/time';
import { Jogador } from 'src/app/models/jogador.model';

@Component({
  selector: 'app-ajuste-selecionar',
  templateUrl: './ajuste-selecionar.page.html',
  styleUrls: ['./ajuste-selecionar.page.scss'],
})
export class AjusteSelecionarPage implements OnInit {
  readonly textoCabecalho = 'Ajuste de selesção de times';
  readonly textoBotao = 'Confirmar';

  formTime: FormGroup

  itemsAsObjects = [];

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
      jogadores: [time.jogadores],
      goleiro: [time.goleiro]
    });
  }

  onAdding(tag: Jogador): Observable<Jogador> {
    const confirm = window.confirm('Do you really want to add this tag?');
    return Observable.call(tag)
      .of(tag)
      .filter(() => confirm);
  }

  onRemoving(tag: Jogador): Observable<Jogador> {
    const confirm = window.confirm('Do you really want to remove this tag?');
    return Observable.call(tag)
      .of(tag)
      .filter(() => confirm);
  }

  botaoConfirmar(): void { 
    console.log(this.formTime.value);
  }
}
