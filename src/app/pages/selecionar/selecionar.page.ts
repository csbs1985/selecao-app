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
  jogadoresTemp = this.memoriaService.memoriaTime.jogadores;
  qtdPorTime = this.memoriaService.memoriaTime.qtdPorTime;
  qtdAtletas = this.jogadoresTemp.length;

  times = [];

  constructor(
    private memoriaService: MemoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ordenarAleatorio();
  }

  ordenarAleatorio() {
    for (let i = this.qtdAtletas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.qtdAtletas[i], this.qtdAtletas[j]] = [this.qtdAtletas[j], this.qtdAtletas[i]];
    }

    this.formatarAtletas();
  }

  formatarAtletas(): void {
    let numAtleta = 1;

    this.jogadoresTemp.forEach(item => {
      item.atleta = numAtleta + ' - ' + item.atleta;
      if (numAtleta >= this.qtdPorTime) { return numAtleta = 1; } numAtleta++;
    });

    this.montarTimes();
  }

  montarTimes(): void {
    let numTime = 1;

    for (let i = 0; i < this.qtdAtletas; i = i + this.qtdPorTime) {
      this.times.push({
        time: 'Time - ' + numTime++,
        jogadores: this.jogadoresTemp.slice(i, i + this.qtdPorTime)
      });
    }
  }

  novamente(): void {
    this.times = [];
    this.ordenarAleatorio();
  }

  confirmar(): void {
    this.router.navigate(['/inicio']);
  }
}
