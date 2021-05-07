import { Component, Input, OnInit } from '@angular/core';
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
    this.resumoInput.forEach(item => {
      this.resumoItem.push({
        equipe: item.equipe,
        data: this.memoriaService.memoriaPlacar.cronometro ? item.tempo.substring(3) + ' - ' + item.periodo + '° T' : '',
        placar: item.placarMandante + ' x ' + item.placarVisitante
      });
    });
  }
}
