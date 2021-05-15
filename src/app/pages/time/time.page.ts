import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {
  readonly textoCabecalho = 'Estes são os times sorteados';
  readonly textoBotao = 'Confirmar';

  times = [];

  jogadoresArray = Object.assign([], this.memoriaService.memoriaTime.jogadores);
  estrelasArray = Object.assign([], this.memoriaService.memoriaTime.estrelas);

  isGoleiro = this.memoriaService.memoriaTime.goleiro;
  qtdPorTime = this.memoriaService.memoriaTime.qtdPorTime;
  qtdJogadores = this.jogadoresArray.length;
  qtdEstrelas = this.estrelasArray.length;
  qtdTotalAtletas = this.qtdJogadores + this.qtdEstrelas;

  constructor(
    private memoriaService: MemoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ordenarAtletas();
  }

  ordenarAtletas() {
    if (this.qtdEstrelas > 0) {
      for (let i = this.qtdEstrelas - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.estrelasArray[i], this.estrelasArray[j]] = [this.estrelasArray[j], this.estrelasArray[i]];
      }
    }

    for (let i = this.qtdJogadores - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.jogadoresArray[i], this.jogadoresArray[j]] = [this.jogadoresArray[j], this.jogadoresArray[i]];
    }

    if (this.qtdEstrelas > 0) {
      this.juntarAtletas();
    } else {
      this.separarTimes();
    }
  }

  juntarAtletas(): void {
    let index = 0;
    for (let i = 0; i < this.qtdEstrelas; i++) {
      this.jogadoresArray.splice(index, 0, this.estrelasArray[i]);
      index += this.qtdPorTime;
    }

    this.separarTimes();
  }

  separarTimes(): void {
    let numTime = 1;

    for (let i = 0; i < this.qtdTotalAtletas; i = i + this.qtdPorTime) {
      this.times.push({
        time: 'Time - ' + numTime++,
        jogadores: this.jogadoresArray.slice(i, i + this.qtdPorTime)
      });
    }

    this.ordenarTimes();
  }

  ordenarTimes(): void {
    this.times.forEach(item => {
      for (let e = item.jogadores.length - 1; e > 0; e--) {
        const j = Math.floor(Math.random() * (e + 1));
        [item.jogadores[e], item.jogadores[j]] = [item.jogadores[j], item.jogadores[e]];
      }
    });

    this.numerarAtletas();
  }

  numerarAtletas(): void {
    let numAtleta = 1;

    this.times.forEach(item => {
      for (let i = 0; i < this.qtdPorTime; i++) {
        item.jogadores[i] = numAtleta + ' - ' + item.jogadores[i];
        if (numAtleta >= this.qtdPorTime) { numAtleta = 1; } else { numAtleta++; }
      }
    });
  }

  confirmar(): void {
    this.router.navigate(['/inicio']);
  }

  botaoVoltar(): void {
    this.router.navigate(['/ajuste-time']);
  }
}
