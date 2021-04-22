import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent {
  @Input() texto?: string;

  constructor(
    private location: Location
  ) { }

  botaoVoltar(): void {
    this.location.back();
  }
}
