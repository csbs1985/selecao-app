import { Component, OnDestroy, OnInit } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Router } from '@angular/router';
import { RelogioService } from 'src/app/services/relogio.service';
import { MemoriaService } from 'src/app/services/memoria.service';
import { TipoEquipe } from 'src/app/models/tipo-equipe.enum';
import { TipoRelogio } from 'src/app/models/tipo-relorio.enum';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.page.html',
  styleUrls: ['./placar.page.scss'],
})
export class PlacarPage implements OnInit, OnDestroy {
  readonly textoCabecalho = 'Placar e Cronômetro';

  placarMandante = 0;
  placarVisitante = 0;

  mandantePonto = '00';
  visitantePonto = '00';

  cronometro: true;
  duracao: 45;
  periodo = 1;

  constructor(
    private memoriaService: MemoriaService,
    private insomnia: Insomnia,
    private router: Router,
    public relogioService: RelogioService
  ) { }

  ngOnInit() {
    this.insomnia.keepAwake();
  }

  ngOnDestroy() {
    this.insomnia.allowSleepAgain();
    this.relogioService.parar();
    this.relogioService.status = TipoRelogio.INATIVO;
    this.memoriaService.memoriaResumo = null;
  }

  periodoTrocar(): void {
    this.periodo = this.periodo === 1 ? 2 : 1;
  }

  aumentarPonto(time): void {
    time === TipoEquipe.MANDANTE ? this.placarMandante++ : this.placarVisitante++;
    this.formatarPontos(time);
  }

  dimimuirPonto(time): void {
    time === TipoEquipe.MANDANTE ? this.placarMandante-- : this.placarVisitante--;
    this.formatarPontos(time);
  }

  formatarPontos(time: TipoEquipe): void {
    let equipePonto = this.placarMandante;
    let ponto = this.mandantePonto;

    if (time === TipoEquipe.VISITANTE) {
      equipePonto = this.placarVisitante;
      ponto = this.visitantePonto;
    }
    if (equipePonto < 1) {
      equipePonto = 0;
      ponto = '00';
    }
    if (equipePonto >= 99) {
      equipePonto = 99;
      ponto = '99';
    }
    ponto = equipePonto.toString().padStart(2, '0');

    if (time === TipoEquipe.MANDANTE) {
      this.placarMandante = equipePonto;
      this.mandantePonto = ponto;
    } else {
      this.placarVisitante = equipePonto;
      this.visitantePonto = ponto;
    }

    this.popularResumo(time);
  }

  popularResumo(time: string): void {
    const resumoArray = {
      equipe: time,
      placarMandante: this.placarMandante,
      placarVisitante: this.placarVisitante,
      periodo: this.periodo,
      cronometro: this.relogioService.tempo,
      data: new Date().getTime()
    };

    // this.memoriaService.resumoMemoria(resumoArray);
  }

  ajustePagina(): void {
    this.router.navigate(['/ajuste-placar']);
  }

  resumoPagina(): void {
    this.router.navigate(['/resumo']);
  }

  get mandanteNome(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.mandanteNome) {
      return this.memoriaService.memoriaPlacar.mandanteNome;
    }
    return TipoEquipe.MANDANTE;
  }

  get visitanteNome(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.visitanteNome) {
      return this.memoriaService.memoriaPlacar.visitanteNome;
    }
    return TipoEquipe.VISITANTE;
  }

  get isCronometro(): boolean {
    if (this.memoriaService.memoriaPlacar) {
      return this.memoriaService.memoriaPlacar.cronometro;
    }
    return true;
  }

  get tempoCorrido(): string {
    if (this.memoriaService.memoriaPlacar &&
      !this.memoriaService.memoriaPlacar.cronometro) {
      this.periodo = 1;
      this.relogioService.parar();
      return '00:00:00';
    }
    return this.relogioService.tempo;
  }

  get isIniciado(): boolean {
    if (this.relogioService.status === TipoRelogio.INATIVO || this.relogioService.status === TipoRelogio.PARADO) { return false; };
    return true;
  }

  get isResumo(): boolean {
    if (this.placarMandante === 0 && this.placarVisitante === 0) {
      return false;
    }
    return true;
  }
}
