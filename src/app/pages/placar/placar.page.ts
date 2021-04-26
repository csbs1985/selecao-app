import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Router } from '@angular/router';
import { RelogioService } from 'src/app/services/relogio.service';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.page.html',
  styleUrls: ['./placar.page.scss'],
})
export class PlacarPage implements OnInit, OnDestroy {
  readonly textoCabecalho = '';

  placarMandante = 0;
  placarVisitante = 0;
  
  placarMandanteReal = '00';
  placarVisitanteReal = '00';
  nomeMandante = 'Mandante';
  nomeVisitante = 'Visitante';

  isIniciado = false;

  constructor(
    private screenOrientation: ScreenOrientation,
    private insomnia: Insomnia,
    private router: Router,
    private relogioService: RelogioService
  ) { }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.insomnia.keepAwake();
  }

  ngOnDestroy() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.insomnia.allowSleepAgain();
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

  inicarRelogio(): void {
    this.relogioService.inciar();
    this.isIniciado = true;
  }

  pausarRelogio(): void { 
    this.relogioService.pausar();
    this.isIniciado = false;
  }

  pararRelogio(): void { 
    this.relogioService.parar();
    this.isIniciado = false;
  }

  get placarRelogio(): string {
    return this.relogioService.tempo || '00:00';
  }

  ajustePagina(): void {
    this.router.navigate(['/ajuste-placar']);
  }

  resumoPagina(): void {
    // this.router.navigate(['/ajuste-placar']);
  }
}
