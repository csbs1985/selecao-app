import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-selecionar',
  templateUrl: './selecionar.page.html',
  styleUrls: ['./selecionar.page.scss'],
})
export class SelecionarPage implements OnInit {
  readonly textoCabecalho = 'Estes são os times selecionados';
  readonly textoBotaoNovamente = 'Sortear Novamente';
  readonly textoBotaoOK = 'Confirmar';

  isGoleiro = this.memoriaService.memoriaTime.goleiro;

  times = [];
  atletas = [];
  jogadores = [];

  constructor(
    private memoriaService: MemoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ordenarAleatorio();
  }

  ordenarAleatorio() {
    const atletas = this.memoriaService.memoriaTime.jogadores;
    for (let i = atletas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [atletas[i], atletas[j]] = [atletas[j], atletas[i]];
    }

    this.atletas = atletas;
    this.montarTimes();
  }

  montarTimes(): void {
    const qtdTimes = this.memoriaService.memoriaTime.qtdTime;
    const qtdAtlestas = this.memoriaService.memoriaTime.jogadores.length;
    let ordemGoleiros = 1;

    if (qtdTimes === 1) {
      for (let i = 0; i < qtdAtlestas; i++) {
        this.jogadores.push({ atleta: ordemGoleiros + ' - ' + this.atletas[i].atleta });
        ordemGoleiros++;
      }

      this.times = [
        {
          time: 'Time - 1',
          atletas: this.jogadores
        }
      ];
    }
  }

  novamente(): void {
    this.jogadores = [];
    this.ordenarAleatorio();
  }

  confirmar(): void {
    this.router.navigate(['/inicio']);
  }
}
