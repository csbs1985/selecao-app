import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss'],
})
export class RelogioComponent implements OnInit {
  @Output() relogioResposta = new EventEmitter();

  isIniciar: boolean = true;

  tempo: any;
  intervalo: number = 1000;
  mm = 0;
  ss = 0;
  ms = 0;

  constructor() { }

  ngOnInit() { }

  inciar(): void {
    this.tempo = setInterval(() => {
      this.timer();
    }, this.intervalo);
  }

  pausar(): void {
    clearInterval(this.tempo);
  }

  parar(): void {
    clearInterval(this.tempo);
    this.mm = 0;
    this.ss = 0;
    this.ms = 0;
    const tempo = '00:00:00';

    this.relogioResposta.emit(tempo);
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

    this.formatar();
  }

  formatar(): void {
    const minuto = (this.mm < 10 ? '0' + this.mm : this.mm);
    const segundo = (this.ss < 10 ? '0' + this.ss : this.ss);
    const milessimo = (this.ms < 10 ? '0' + this.ms : this.ms);
    const relogio = minuto + ':' + segundo + ':' + milessimo;

    this.relogioResposta.emit(relogio);
  }
}
