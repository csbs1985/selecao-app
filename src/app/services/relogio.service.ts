import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RelogioService {

  status = 'inativo';

  hh = 0;
  mm = 0;
  ss = 0;

  intervalo = 1000;
  tempo: any = '00:00:00';
  crom: any;

  constructor() { }

  inciar(): void {
    this.crom = setInterval(() => { this.timer(); }, this.intervalo);
    this.status = 'iniciado';
  }

  pausar(): void {
    clearInterval(this.crom);
    this.status = 'parado';
  }

  parar(): void {
    clearInterval(this.crom);

    this.hh = 0;
    this.mm = 0;
    this.ss = 0;

    this.tempo = '00:00:00';
    this.status = 'parado';
  }

  timer(): void {
    this.ss++;

    if (this.ss === 59) {
      this.ss = 0;
      this.mm++;

      if (this.mm === 59) {
        this.mm = 0;
        this.hh++;
      }
    }

    const hora = (this.hh < 10 ? '0' + this.hh : this.hh);
    const minuto = (this.mm < 10 ? '0' + this.mm : this.mm);
    const segundo = (this.ss < 10 ? '0' + this.ss : this.ss);

    this.tempo = hora + ':' + minuto + ':' + segundo;
  }
}
