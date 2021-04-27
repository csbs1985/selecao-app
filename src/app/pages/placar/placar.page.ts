import { Component, OnDestroy, OnInit } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.page.html',
  styleUrls: ['./placar.page.scss'],
})
export class PlacarPage implements OnInit, OnDestroy {
  readonly textoCabecalho = '';

  placarMandante = 0;
  placarVisitante = 0;
  periodo = 1;

  placarRelogio = '00:00:00';
  placarMandanteReal = '00';
  placarVisitanteReal = '00';
  nomeMandante = 'Mandante';
  nomeVisitante = 'Visitante';
  statusRelogio = 'inativo';

  isIniciado = false;

  constructor(
    private insomnia: Insomnia,
    private router: Router
  ) { }

  ngOnInit() {
    this.insomnia.keepAwake();
  }

  ngOnDestroy() {
    this.insomnia.allowSleepAgain();
  }

  periodoTrocar(): void {
    this.periodo === 1 ? this.periodo = 2 : this.periodo = 1;
  }

  adicionarMandante(): void {
    this.placarMandante++;
    this.formatarPontosMandante();
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

  relogioIniciar(): void { }

  relogioResposta(resposta): void {
    this.statusRelogio = resposta;
  }

  ajustePagina(): void {
    this.router.navigate(['/ajuste-placar']);
  }

  resumoPagina(): void {
    this.router.navigate(['/resumo']);
  }
}
