import { Injectable } from '@angular/core';
import { Placar } from '../models/placar.model';
import { Resumo } from '../models/resumo.model';

@Injectable({
  providedIn: 'root'
})
export class MemoriaService {

  memoriaResumo = [];
  memoriaPlacar: Placar;

  constructor() { }

  resumoMemoria(resumoArray: Resumo): void {
    this.memoriaResumo.push(resumoArray)
  }

  placarMemoria(placar: Placar): void {
    this.memoriaPlacar = placar;
  }
}
