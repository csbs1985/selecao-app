import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() RespostaModal = new EventEmitter();

  readonly textoBotao = 'Fechar';

  constructor() { }

  botaoFechar(): void {
    this.RespostaModal.emit();
  }
}
