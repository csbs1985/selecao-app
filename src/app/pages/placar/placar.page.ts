import { Component, OnDestroy, OnInit } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Router } from '@angular/router';
import { RelogioService } from 'src/app/services/relogio.service';
import { MemoriaService } from 'src/app/services/memoria.service';

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
    private memoriaService: MemoriaService,
    private insomnia: Insomnia,
    private router: Router,
    public relogioService: RelogioService
  ) { }

  ngOnInit() {
    this.insomnia.keepAwake();
    this.popularPlacar();
  }

  ngOnDestroy() {
    this.insomnia.allowSleepAgain();
    // this.relogioService.parar();
    // this.relogioService.status = 'inativo';
    // this.memoriaService.memoriaResumo = null;
  }

  periodoTrocar(): void {
    if (this.periodo === 1) { this.periodo = 2; return; }
    this.periodo = 1;
  }

  relogioClick(): void {
    if (this.relogioService.status === 'inativo') {
      this.relogioService.inciar();
      this.popularResumo('inicio');
      return;
    }
    this.relogioService.pausar();
  }

  adicionarMandante(): void {
    this.placarMandante++;
    this.formatarPontosMandante();
    this.popularResumo('mandante');
  }

  diminuirMandante(): void {
    this.placarMandante--;
    this.formatarPontosMandante();
    this.popularResumo('mandante');
  }

  adicionarVisitante(): void {
    this.placarVisitante++;
    this.formatarPontosVisitante();
    this.popularResumo('visitante');
  }

  diminuirVisitante(): void {
    this.placarVisitante--;
    this.formatarPontosVisitante();
    this.popularResumo('visitante');
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

  popularResumo(time: string): void {
    const resumoArray = {
      tipo: time,
      placar: this.placarMandante + ' x ' + this.placarVisitante,
      texto: time,
      cronometro: this.relogioService.tempo,
      data: new Date().getTime()
    };

    this.memoriaService.resumoMemoria(resumoArray);
    this.popularPlacar();
  }

  popularPlacar(): void {
    const placar = {
      mandanteNome: this.nomeMandante || 'Mandante',
      mandantePonto: this.placarMandante || 0,
      visitanteNome: this.nomeVisitante || 'Visitante',
      visitantePonto: this.placarVisitante || 0
    };

    this.memoriaService.placarMemoria(placar);
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
    if (this.relogioService.status === 'inativo' || this.relogioService.status === 'parado') { return false; };
    return true;
  }

  get isResumo(): boolean {
    if (this.relogioService.status === 'inativo') { return false; }
    return true;
  }
}
