import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
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
  placarMandanteReal = '00';
  placarVisitanteReal = '00';
  placarRelogio = '00:00';
  placarTempo = 1;
  nomeMandante = 'Mandante';
  nomeVisitante = 'Visitante';

  constructor(
    private screenOrientation: ScreenOrientation,
    private insomnia: Insomnia,
    private router: Router
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
    this.placarVisitanteReal = this.placarVisitante.toString();
  }

  relogioResposta(resposta): void {
    this.placarRelogio = resposta;
  }

  ajustePagina(): void {
    this.router.navigate(['/ajuste-placar']);
  }

  resumoPagina(): void {
    // this.router.navigate(['/ajuste-placar']);
  }
}
