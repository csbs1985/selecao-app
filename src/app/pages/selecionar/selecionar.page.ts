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

  jogadoresArray = Object.assign([], this.memoriaService.memoriaTime.jogadores);
  estrelasArray = Object.assign([], this.memoriaService.memoriaTime.estrelas);

  isGoleiro = this.memoriaService.memoriaTime.goleiro;
  qtdPorTime = this.memoriaService.memoriaTime.qtdPorTime;
  qtdJogadores = this.jogadoresArray.length;
  qtdEstrelas = this.estrelasArray.length;

  constructor(
    private memoriaService: MemoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ordenarAleatorio();
  }

  ordenarAleatorio() {
    if (this.qtdEstrelas) {
      for (let i = this.qtdEstrelas - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.estrelasArray[i], this.estrelasArray[j]] = [this.estrelasArray[j], this.estrelasArray[i]];
      }
    }

    for (let i = this.qtdJogadores - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.jogadoresArray[i], this.jogadoresArray[j]] = [this.jogadoresArray[j], this.jogadoresArray[i]];
    }

    if (this.qtdEstrelas) {
      this.juntarAtletas();
    } else {
      this.formatarAtletas();
    }
  }

  juntarAtletas(): void {
    this.formatarAtletas();
  }

  formatarAtletas(): void {
    let numAtleta = 1;

    for (let i = 0; i < this.qtdJogadores; i++) {
      this.jogadoresArray[i] = numAtleta + ' - ' + this.jogadoresArray[i];
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

    for (let i = 0; i < this.qtdJogadores; i = i + this.qtdPorTime) {
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
    this.router.navigate(['/ajuste-selecionar']);
  }
}
