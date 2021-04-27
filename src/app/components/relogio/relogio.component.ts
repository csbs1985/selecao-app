import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styles: ['p { color: var(--azul); font-family: var(--led); font-size: 1.75rem; }']
})
export class RelogioComponent implements OnInit {
  @Output() relogioResposta = new EventEmitter();

  status = 'inativo';

  tempo: any;
  intervalo = 60;
  mm = 0;
  ss = 0;
  ms = 0;

  constructor() { }

  ngOnInit() { 
    console.log(this.status); 
  }

  inciar(): void {
    this.tempo = setInterval(() => {
      this.timer();

      if (this.status === 'inativo') {
        this.status = 'iniciado';
        console.log(this.status); 
        this.relogioResposta.emit(this.status);
      }
    }, this.intervalo);
  }

  pausar(): void {
    clearInterval(this.tempo);
    this.status = 'parado';
    console.log(this.status); 
    this.relogioResposta.emit(this.status);
  }

  parar(): void {
    clearInterval(this.tempo);
    this.mm = 0;
    this.ss = 0;
    this.ms = 0;
    this.tempo = '00:00:00';

    this.status = 'parado';
    console.log(this.status); 
    this.relogioResposta.emit(this.status);
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
    this.tempo = minuto + ':' + segundo + ':' + milessimo;
  }
}
