import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RelogioService {
  tempo: any;
  intervalo = 1000;
  hh = 0;
  mm = 0;
  ss = 0;

  constructor() { }

  ngOnInit() { }

  inciar(): any {
    this.tempo = setInterval(() => {
      this.timer();
    }, this.intervalo);
  }

  pausar(): void {
    this.tempo = clearInterval(this.tempo);
  }

  parar(): void {
    this.tempo = clearInterval(this.tempo);
    this.hh = 0;
    this.mm = 0;
    this.ss = 0;
    this.tempo = '00:00';
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

    const minuto = (this.mm < 10 ? '0' + this.mm : this.mm);
    const segundo = (this.ss < 10 ? '0' + this.ss : this.ss);
    this.tempo =  minuto + ':' + segundo;
  }
}
