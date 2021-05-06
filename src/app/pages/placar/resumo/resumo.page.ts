import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Resumo } from 'src/app/models/resumo.model';
import { TipoEquipe } from 'src/app/models/tipo-equipe.enum';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
})
export class ResumoPage implements OnInit {
  readonly textoCabecalho = 'Resumão da partida';

  resumoItens: Resumo[];

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

  get mandanteNome(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.mandanteNome) {
      return this.memoriaService.memoriaPlacar.mandanteNome;
    }
    return TipoEquipe.MANDANTE;
  }

  get mandantePonto(): number {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.mandantePonto) {
      return this.memoriaService.memoriaPlacar.mandantePonto;
    }
    return 0;
  }

  get visitanteNome(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.visitanteNome) {
      return this.memoriaService.memoriaPlacar.visitanteNome;
    }
    return TipoEquipe.VISITANTE;
  }

  get visitantePonto(): number {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.visitantePonto) {
      return this.memoriaService.memoriaPlacar.visitantePonto;
    }
    return 0;
  }
}
