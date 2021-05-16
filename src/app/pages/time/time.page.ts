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
  qtdTotalAtleta = this.qtdJogadores + this.qtdEstrelas;

  constructor(
    private memoriaService: MemoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ordenarAleatorio();
  }

  ordenarAleatorio() {
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
      this.numerarAtletas();
    }
  }

  juntarAtletas(): void {
    let count = 0;
    for (let i = 0; i < this.qtdEstrelas; i++) {
      this.jogadoresArray.splice(count, 0, this.estrelasArray[i]);
      count += this.qtdPorTime;
    }

    this.numerarAtletas();
  }

  numerarAtletas(): void {
    let numAtleta = 1;

    for (let i = 0; i < this.qtdTotalAtleta; i++) {
      this.jogadoresArray[i] = numAtleta + ' - ' + this.jogadoresArray[i];
      if (numAtleta >= this.qtdPorTime) {
        numAtleta = 1;
      } else {
        numAtleta++;
      }
    }

    this.separarTimes();
  }

  separarTimes(): void {
    let numTime = 1;

    for (let i = 0; i < this.qtdTotalAtleta; i = i + this.qtdPorTime) {
      this.times.push({
        time: 'Time - ' + numTime++,
        jogadores: this.jogadoresArray.slice(i, i + this.qtdPorTime)
      });
    }
  }

  confirmar(): void {
    this.router.navigate(['/inicio']);
  }

  botaoVoltar(): void {
    this.router.navigate(['/ajuste-time']);
  }
}
