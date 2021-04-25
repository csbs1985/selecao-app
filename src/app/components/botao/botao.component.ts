import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss'],
})
export class BotaoComponent implements OnInit {
  @Input() texto: string;
  @Output() bataoResposta = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  cliqueBotao(): void {
    this.bataoResposta.emit(this.texto);
  }

}
