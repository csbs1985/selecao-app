import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-selecionar',
  templateUrl: './selecionar.page.html',
  styleUrls: ['./selecionar.page.scss'],
})
export class SelecionarPage implements OnInit {
  readonly textoCabecalho = 'Estes são os times sorteados';
  readonly textoBotao = 'Confirmar';

  times = [];

  jogadoresTemp = Object.assign([], this.memoriaService.memoriaTime.jogadores);

  isGoleiro = this.memoriaService.memoriaTime.goleiro;
  qtdPorTime = this.memoriaService.memoriaTime.qtdPorTime;
  qtdAtletas = this.jogadoresTemp.length;

  constructor(
    private memoriaService: MemoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ordenarAleatorio();
  }

  ordenarAleatorio() {
    for (let i = this.qtdAtletas - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.jogadoresTemp[i], this.jogadoresTemp[j]] = [this.jogadoresTemp[j], this.jogadoresTemp[i]];
    }

    this.formatarAtletas();
  }

  formatarAtletas(): void {
    let numAtleta = 1;

    for (let i = 0; i < this.qtdAtletas; i++) {
      this.jogadoresTemp[i] = numAtleta + ' - ' + this.jogadoresTemp[i];
      if (numAtleta >= this.qtdPorTime) {
        numAtleta = 1;
      } else {
        numAtleta++;
      }
    }

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

  confirmar(): void {
    this.router.navigate(['/inicio']);
  }
}
