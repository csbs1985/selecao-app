import { Injectable } from '@angular/core';
import { Placar } from '../models/placar.model';
import { Resumo } from '../models/resumo.model';
import { Time } from '../models/time.model';
import { TipoEquipe } from '../models/tipo-equipe.enum';

@Injectable({
  providedIn: 'root'
})
export class MemoriaService {

  memoriaResumo = [];
  memoriaTime;
  memoriaRelogio: boolean;

  memoriaPlacar: Placar = {
    mandanteNome: TipoEquipe.MANDANTE,
    mandantePonto: 0,
    visitanteNome: TipoEquipe.VISITANTE,
    visitantePonto: 0,
    cronometro: true,
    duracao: 45,
    periodo: 1
  };

  constructor() { }

  resumoMemoria(resumoArray: Resumo): void {
    this.memoriaResumo.push(resumoArray);
  }

  placarMemoria(placar: Placar): void {
    this.memoriaPlacar = placar;
  }

  timeMemoria(time: Time): void {
    this.memoriaTime = time;
  }

  relogioMemoria(notificacao: boolean): void {
    this.memoriaRelogio = notificacao;
  }
}
