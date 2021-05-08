import { Component, Input, OnInit } from '@angular/core';
import { TipoEquipe } from 'src/app/models/tipo-equipe.enum';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-resumo-item',
  templateUrl: './resumo-item.component.html',
  styleUrls: ['./resumo-item.component.scss'],
})
export class ResumoItemComponent implements OnInit {

  @Input() resumoInput;

  resumoItem = [];

  constructor(
    public memoriaService: MemoriaService
  ) { }

  ngOnInit() {
    this.popularResumoItem();
  }

  popularResumoItem(): void {
    let placarMandante = 0;
    let placarVisitante = 0;
    const arrayTemp = [];

    this.resumoInput.forEach(item => {
      if (item.equipe === TipoEquipe.MANDANTE) {
        placarMandante++;
      } else { placarVisitante++; }

      arrayTemp.push({
        equipe: item.equipe,
        data: this.memoriaService.memoriaPlacar.cronometro ? item.tempo.substring(3) + ' - ' + item.periodo + '° T' : '',
        placar: placarMandante + ' x ' + placarVisitante
      });
    });

    this.resumoItem = arrayTemp.sort((a, b) =>
      b.data < a.data ? -1 : b.data > a.data ? 1 : 0
    );
  }
}
