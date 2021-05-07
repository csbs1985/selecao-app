import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoEquipe } from 'src/app/models/tipo-equipe.enum';
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
    let mandanteNome = '';
    let visitanteNome = '';
    let duracao = 0;
    let cronometro = null;

    if (this.memoriaService.memoriaPlacar) {
      mandanteNome = this.memoriaService.memoriaPlacar.mandanteNome || TipoEquipe.MANDANTE;
      visitanteNome = this.memoriaService.memoriaPlacar.visitanteNome || TipoEquipe.VISITANTE;
      cronometro = this.memoriaService.memoriaPlacar.cronometro || true;
      duracao = this.memoriaService.memoriaPlacar.duracao || 45;
    }

    this.formPlacar = this.formBuilder.group({
      mandanteNome: [mandanteNome, Validators.required],
      visitanteNome: [visitanteNome, Validators.required],
      cronometro: [cronometro, Validators.required],
      duracao: [duracao, Validators.required]
    });
  }

  confirmar(): void {
    this.validarForm();
    this.memoriaService.placarMemoria(this.formPlacar.value);
    this.router.navigate(['/placar']);
  }

  botaoVoltar(): void {
    this.router.navigate(['/placar']);
  }

  validarForm(): void {
    if (this.formPlacar.value.mandanteNome === '') {
      this.formPlacar.value.mandanteNome = TipoEquipe.MANDANTE;
    }

    if (this.formPlacar.value.visitanteNome === '') {
      this.formPlacar.value.visitanteNome = TipoEquipe.VISITANTE;
    }
  }

  get isCronometro(): any {
    return this.formPlacar.get('cronometro').value;
  }
}
