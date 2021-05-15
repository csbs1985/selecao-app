import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss'],
})
export class BotaoComponent {
  @Input() texto: string;
  @Output() bataoResposta = new EventEmitter();

  constructor() { }

  cliqueBotao(): void {
    this.bataoResposta.emit(this.texto);
  }
}
