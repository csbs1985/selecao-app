import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo-item',
  templateUrl: './resumo-item.component.html',
  styleUrls: ['./resumo-item.component.scss'],
})
export class ResumoItemComponent implements OnInit {

  @Input() resumoInput;

  constructor() { }

  ngOnInit() { }

}
