import { Component, OnInit } from '@angular/core';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-selecionar',
  templateUrl: './selecionar.page.html',
  styleUrls: ['./selecionar.page.scss'],
})
export class SelecionarPage implements OnInit {
  readonly textoCabecalho = 'Estes são os times selecionados';
  teste;

  constructor(
    private memoriaService: MemoriaService
  ) { }

  ngOnInit() {
    this.teste = this.memoriaService.memoriaTime.jogadores[0];
  }
}
