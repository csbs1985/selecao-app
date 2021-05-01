import { Injectable } from '@angular/core';
import { Placar } from '../models/placar.model';
import { Resumo } from '../models/resumo.model';
import { Time } from '../models/time.model';

@Injectable({
  providedIn: 'root'
})
export class MemoriaService {

  memoriaResumo = [];
  memoriaPlacar: Placar;
  memoriaTime;

  constructor() { }

  resumoMemoria(resumoArray: Resumo): void {
    this.memoriaResumo.push(resumoArray);
  }

  placarMemoria(placar: Placar): void {
    this.memoriaPlacar = placar;
  }

  timeMemoria(time: Time): void {
    this.memoriaTime = time;
    console.log(this.memoriaTime);
  }
}
