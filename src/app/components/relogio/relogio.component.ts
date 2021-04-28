import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})
export class RelogioComponent implements OnInit {
  @Output() relogioResposta = new EventEmitter();

  status = 'inativo';

  tempo: any = '00:00:00';
  intervalo = 10;
  mm = 0;
  ss = 0;
  ms = 0;

  constructor() { }

  ngOnInit() { }

  inciar(): void {
    this.tempo = window.setInterval(() => { this.timer(); }, this.intervalo);
    this.relogioResposta.emit(this.status = 'iniciado');
  }

  pausar(): void {
    window.clearInterval(this.tempo);
    this.relogioResposta.emit(this.status = 'parado');
  }

  parar(): void {
    window.clearInterval(this.tempo);
    this.mm = 0;
    this.ss = 0;
    this.ms = 0;
    this.tempo = '00:00:00';

    this.relogioResposta.emit(this.status = 'parado');
  }

  timer(): void {
    this.ms++;

    if (this.ms == 59) {
      this.ms = 0;
      this.ss++;

      if (this.ss == 59) {
        this.ss = 0;
        this.mm++;
      }
    }

    const minuto = (this.mm < 10 ? '0' + this.mm : this.mm);
    const segundo = (this.ss < 10 ? '0' + this.ss : this.ss);
    const milessimo = (this.ms < 10 ? '0' + this.ms : this.ms);

    this.tempo = minuto + ':' + segundo + ':' + milessimo;
  }
}
