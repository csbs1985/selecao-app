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
    this.relogioService.status = 'inativo';
    this.memoriaService.memoriaResumo = null;
  }

  periodoTrocar(): void {
    if (this.periodo === 1) { this.periodo = 2; return; }
    this.periodo = 1;
  }

  get mandanteNome(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.mandanteNome) {
      return this.memoriaService.memoriaPlacar.mandanteNome;
    }
    return 'Mandante';
  }

  get visitanteNome(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.visitanteNome) {
      return this.memoriaService.memoriaPlacar.visitanteNome;
    }
    return 'Visitante';
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
      this.mandantePonto = this.placarMandante.toString().padStart(2, '0');
      if (this.placarMandante < 1) {
        this.placarMandante = 0;
        this.mandantePonto = '00';
      }
      return;
    }
    if (this.placarMandante >= 99) {
      this.placarMandante = 99;
      this.mandantePonto = '99';
      return;
    }
    this.mandantePonto = this.placarMandante.toString();
  }

  formatarPontosVisitante(): void {
    if (this.placarVisitante < 10) {
      this.visitantePonto = this.placarVisitante.toString().padStart(2, '0');
      if (this.placarVisitante < 1) {
        this.placarVisitante = 0;
        this.visitantePonto = '00';
      }
      return;
    }
    if (this.placarVisitante >= 99) {
      this.placarVisitante = 99;
      this.visitantePonto = '99';
      return;
    }
    this.visitantePonto = this.placarVisitante.toString();
  }

  ajustePagina(): void {
    this.router.navigate(['/ajuste-placar']);
  }

  resumoPagina(): void {
    this.router.navigate(['/resumo']);
  }

  get isIniciado(): boolean {
    if (this.relogioService.status === 'inativo' || this.relogioService.status === 'parado') { return false; };
    return true;
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
  }
}
