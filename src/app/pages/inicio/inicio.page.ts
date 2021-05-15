import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private router: Router) { }

  rotaAjusteSelecionar(): void {
    this.router.navigate(['/ajuste-selecionar']);
  }

  rotaPlacar(): void {
    this.router.navigate(['/placar']);
  }
}
