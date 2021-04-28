import { Component, Input, OnInit } from '@angular/core';
import { Resumo } from 'src/app/models/resumo.model';

@Component({
  selector: 'app-resumo-centro',
  templateUrl: './resumo-centro.component.html',
  styleUrls: ['./resumo-centro.component.scss'],
})
export class ResumoCentroComponent implements OnInit {

  @Input() resumoInput = Resumo;

  constructor() { }

  ngOnInit() { }

}
