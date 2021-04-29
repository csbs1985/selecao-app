import { Component, OnDestroy, OnInit } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Router } from '@angular/router';
import { RelogioService } from 'src/app/services/relogio.service';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.page.html',
  styleUrls: ['./placar.page.scss'],
})
export class PlacarPage implements OnInit, OnDestroy {
  readonly textoCabecalho = 'Placar e Cronômetro';

  placarMandante = 0;
  placarVisitante = 0;
  periodo = 1;

  placarRelogio = '00:00:00';
  placarMandanteReal = '00';
  placarVisitanteReal = '00';
  nomeMandante = 'Mandante';
  nomeVisitante = 'Visitante';

  constructor(
    private insomnia: Insomnia,
    private router: Router,
    public relogioService: RelogioService
  ) { }

  ngOnInit() {
    this.insomnia.keepAwake();
  }

  ngOnDestroy() {
    this.insomnia.allowSleepAgain();
  }

  periodoTrocar(): void {
    if (this.periodo === 1) { this.periodo = 2; return; }

    this.periodo = 1;
  }

  relogioClick(): void {
    if (this.relogioService.status === 'inativo') {
      return this.relogioService.inciar();
    }

    this.relogioService.pausar();
  }

  adicionarMandante(): void {
    this.placarMandante++;
    this.formatarPontosMandante();
    this.popularResumo();
  }

  diminuirMandante(): void {
    this.placarMandante--;
    this.formatarPontosMandante();
  }

  adicionarVisitante(): void {
    this.placarVisitante++;
    this.formatarPontosVisitante();
  }

  diminuirVisitante(): void {
    this.placarVisitante--;
    this.formatarPontosVisitante();
  }

  formatarPontosMandante(): void {
    if (this.placarMandante < 10) {
      this.placarMandanteReal = this.placarMandante.toString().padStart(2, '0');
      if (this.placarMandante < 1) {
        this.placarMandante = 0;
        this.placarMandanteReal = '00';
      }
      return;
    }
    if (this.placarMandante >= 99) {
      this.placarMandante = 99;
      this.placarMandanteReal = '99';
      return;
    }
    this.placarMandanteReal = this.placarMandante.toString();
  }

  formatarPontosVisitante(): void {
    if (this.placarVisitante < 10) {
      this.placarVisitanteReal = this.placarVisitante.toString().padStart(2, '0');
      if (this.placarVisitante < 1) {
        this.placarVisitante = 0;
        this.placarVisitanteReal = '00';
      }
      return;
    }
    if (this.placarVisitante >= 99) {
      this.placarVisitante = 99;
      this.placarVisitanteReal = '99';
      return;
    }
    this.placarVisitanteReal = this.placarVisitante.toString();
  }

  popularResumo(): void {
    // this.relogio
  }

  ajustePagina(): void {
    this.router.navigate(['/ajuste-placar']);
  }

  resumoPagina(): void {
    this.router.navigate(['/resumo']);
  }

  get tempoCorrido(): void {
    return this.relogioService.tempo;
  }

  get isIniciado(): boolean {
    if (this.relogioService.status === 'inativo') {
      return false;
    };

    return true;
  }

  get statusRelogio(): string {
    return this.relogioService.status || 'inativo';
  }
}
