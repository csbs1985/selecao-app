import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MemoriaService } from 'src/app/services/memoria.service';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() RespostaModal = new EventEmitter();

  readonly textoBotao = 'Fechar';

  textoModal: string;

  constructor(
    private memoriaService: MemoriaService,
    private vibration: Vibration
  ) {  }

  ngOnInit() {
    const duracao = this.memoriaService.memoriaPlacar.duracao;
    this.textoModal = 'Os ' + duracao + ' minutos estipulados acabaram.';
    this.vibration.vibrate([1000, 500, 1000, 500, 1000]);
  }

  botaoFechar(): void {
    this.RespostaModal.emit();
  }

  get isModal(): boolean {
    return this.memoriaService.memoriaRelogio;
  }
}
