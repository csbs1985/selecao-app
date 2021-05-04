import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-ajuste-placar',
  templateUrl: './ajuste-placar.page.html',
  styleUrls: ['./ajuste-placar.page.scss'],
})
export class AjustePlacarPage implements OnInit {
  readonly textoCabecalho = 'Ajustar placa e cronômetro';
  readonly textoBotao = 'Confirmar';

  formPlacar: FormGroup;

  duracaoArray = {
    name: 'duracao',
    checked: 45,
    valor: [10, 15, 20, 25, 30, 35, 40, 45]
  };

  constructor(
    private formBuilder: FormBuilder,
    private memoriaService: MemoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.criarForm();
  }

  criarForm() {
    this.formPlacar = this.formBuilder.group({
      mandante: ['Mandante', Validators.required],
      visitante: ['Visitante', Validators.required],
      cronometro: [true, Validators.required],
      toque: [true, Validators.required],
      duracao: [45, Validators.required]
    });
  }

  confirmar(): void {
    this.memoriaService.placarMemoria(this.formPlacar.value);
    this.router.navigate(['/placar']);
  }

  get isCronometro(): any {
    return this.formPlacar.get('cronometro').value;
  }
}
