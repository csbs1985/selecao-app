import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private memoriaService: MemoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.popularResumo();
  }

  popularResumo(): void {
    this.resumoItens = this.memoriaService.memoriaResumo;
  }

  botaoVoltar(): void {
    this.router.navigate(['/placar']);
  }

  get mandanteNome(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.mandanteNome) {
      return this.memoriaService.memoriaPlacar.mandanteNome;
    }
    return TipoEquipe.MANDANTE;
  }

  get mandantePonto(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.mandantePonto) {
      return this.memoriaService.memoriaPlacar.mandantePonto.toString().padStart(2, '0');
    }
    return '00';
  }

  get visitanteNome(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.visitanteNome) {
      return this.memoriaService.memoriaPlacar.visitanteNome;
    }
    return TipoEquipe.VISITANTE;
  }

  get visitantePonto(): string {
    if (this.memoriaService.memoriaPlacar &&
      this.memoriaService.memoriaPlacar.visitantePonto) {
      return this.memoriaService.memoriaPlacar.visitantePonto.toString().padStart(2, '0');
    }
    return '00';
  }
}
