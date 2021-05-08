import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { MemoriaService } from 'src/app/services/memoria.service';

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
    private animationCtrl: AnimationController,
    private memoriaService: MemoriaService
  ) {
    this.animationCtrl.create()
      .addElement(document.querySelector('.modal-conteudo'))
      .duration(1000)
      .iterations(Infinity)
      .fromTo('transform', 'translateY(-100%)', 'translateY(0)');
  }

  ngOnInit() {
    const duracao = this.memoriaService.memoriaPlacar.duracao;
    this.textoModal = 'Os ' + duracao + ' minutos estipulados acabaram.';
  }

  botaoFechar(): void {
    this.RespostaModal.emit();
  }

  get isModal(): boolean {
    return this.memoriaService.memoriaRelogio;
  }
}
