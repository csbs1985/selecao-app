import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-ajuste-selecionar',
  templateUrl: './ajuste-selecionar.page.html',
  styleUrls: ['./ajuste-selecionar.page.scss'],
})
export class AjusteSelecionarPage implements OnInit {
  readonly textoCabecalho = 'Ajuste e seleção de times';
  readonly textoBotao = 'Confirmar';

  formTime: FormGroup;

  atleta: string;

  qtdTimesArray = {
    name: 'qtdTime',
    valor: [1, 2, 3, 4, 5, 6]
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
    this.formTime = this.formBuilder.group({
      qtdTime: [2, Validators.required],
      goleiro: [true, Validators.required],
      jogadores: this.formBuilder.array([])
    });
  }

  adicionarAtleta(): void {
    if (this.atleta !== undefined && this.atleta !== '') {
      this.formTime.value.jogadores.push(this.atleta);
      this.atleta = '';
    }
  }

  removerAtleta(atleta): void {
    const index = this.formTime.value.jogadores.indexOf(atleta, 0);
    if (index > -1) {
      this.formTime.value.jogadores.splice(index, 1);
    }
  }

  botaoConfirmar(): void {
    this.memoriaService.timeMemoria(this.formTime.value);
    this.router.navigate(['/selecionar']);
  }

  get placeholder(): string {
    return this.formTime.value.jogadores <= 0 ? 'Quem vai joga?' : '+1';
  }

  get numAtletas(): number {
    return this.formTime.value.jogadores.length;
  }

  get isBotaoConfirmar(): boolean {
    return this.formTime.value.jogadores <= 0 ? false : true;
  }
}
