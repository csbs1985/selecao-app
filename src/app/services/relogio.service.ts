import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RelogioService {

  status = 'inativo';

  tempo: any = '00:00:00';
  intervalo = 100;
  mm = 0;
  ss = 0;
  ms = 0;

  constructor() { }

  inciar(): void {
    this.tempo = setInterval(() => { this.timer(); }, this.intervalo);
    this.status = 'iniciado';
  }

  pausar(): void {
    window.clearInterval(this.tempo);
    this.status = 'parado';
  }

  parar(): void {
    window.clearInterval(this.tempo);

    this.mm = 0;
    this.ss = 0;
    this.ms = 0;
    this.tempo = '00:00:00';

    this.status = 'parado';
  }

  timer(): string {
    this.ms++;

    if (this.ms === 59) {
      this.ms = 0;
      this.ss++;

      if (this.ss === 59) {
        this.ss = 0;
        this.mm++;
      }
    }

    const minuto = (this.mm < 10 ? '0' + this.mm : this.mm);
    const segundo = (this.ss < 10 ? '0' + this.ss : this.ss);
    const milessimo = (this.ms < 10 ? '0' + this.ms : this.ms);

    return this.tempo = minuto + ':' + segundo + ':' + milessimo;
  }
}
