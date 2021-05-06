import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-resumo-item',
  templateUrl: './resumo-item.component.html',
  styleUrls: ['./resumo-item.component.scss'],
})
export class ResumoItemComponent implements OnInit {

  @Input() resumoInput;

  resumoItem = [];

  constructor() { }

  ngOnInit() {
    this.popularResumoItem();
  }

  popularResumoItem(): void {
    this.resumoInput.forEach(item => {
      this.resumoItem.push({
        equipe: item.equipe,
        data: item.cronometro.substring(3) + ' - ' + item.periodo + '° T',
        placar: item.placarMandante + ' x ' + item.placarVisitante
      });
    });
  }
}
