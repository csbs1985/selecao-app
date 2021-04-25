import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss'],
})
export class RelogioComponent implements OnInit {
  @Output() relogioResposta = new EventEmitter();

  isRodando: boolean = false;

  tempo: any;
  intervalo: number = 1000;
  hh = 0;
  mm = 0;
  ss = 0;

  constructor() { }

  ngOnInit() { }

  inciar(): void {
    this.tempo = setInterval(() => {
      this.timer();
    }, this.intervalo);

    this.isRodando = true;
  }

  pausar(): void {
    clearInterval(this.tempo);
    this.isRodando = false;
  }

  parar(): void {
    clearInterval(this.tempo);
    this.hh = 0;
    this.mm = 0;
    this.ss = 0;
    const tempo = '00:00';

    this.relogioResposta.emit(tempo);
    this.isRodando = false;
  }

  timer(): void {
    this.ss++;

    if (this.ss == 59) {
      this.ss = 0;
      this.mm++;

      if (this.mm == 59) {
        this.mm = 0;
        this.hh++;
      }
    }

    this.formatar();
  }

  formatar(): void {
    const minuto = (this.mm < 10 ? '0' + this.mm : this.mm);
    const segundo = (this.ss < 10 ? '0' + this.ss : this.ss);
    const relogio = minuto + ':' + segundo;

    this.relogioResposta.emit(relogio);
  }
}
