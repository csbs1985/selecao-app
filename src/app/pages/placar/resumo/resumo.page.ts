import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Resumo } from 'src/app/models/resumo.model';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
})
export class ResumoPage implements OnInit {
  readonly textoCabecalho = 'Resumão da partida';

  resumoItens: Resumo[];

  mandanteNome = this.memoriaService.memoriaPlacar.mandanteNome;
  mandantePonto = this.memoriaService.memoriaPlacar.mandantePonto;
  visitanteNome = this.memoriaService.memoriaPlacar.visitanteNome;
  visitantePonto = this.memoriaService.memoriaPlacar.visitantePonto;

  constructor(
    private location: Location,
    private memoriaService: MemoriaService
  ) { }

  ngOnInit() {
    this.popularResumo();
  }

  popularResumo(): void {
    this.resumoItens = this.memoriaService.memoriaResumo.sort((a, b) =>
      b.data < a.data ? -1 : b.data > a.data ? 1 : 0
    );
  }

  botaoVoltar(): void {
    this.location.back();
  }
}
