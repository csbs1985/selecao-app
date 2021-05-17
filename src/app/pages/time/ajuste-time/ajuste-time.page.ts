import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemoriaService } from 'src/app/services/memoria.service';

@Component({
  selector: 'app-ajuste-time',
  templateUrl: './ajuste-time.page.html',
  styleUrls: ['./ajuste-time.page.scss'],
})
export class AjusteTimePage implements OnInit {
  readonly textoCabecalho = 'Ajuste e seleção de times';
  readonly textoBotao = 'Confirmar';

  formTime: FormGroup;
  atleta: string;

  qtdPorTimeArray = {
    name: 'qtdPorTime',
    valor: [2, 3, 5, 6, 7, 8, 9, 10, 11]
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
      qtdPorTime: [5, Validators.required],
      goleiro: [true, Validators.required],
      jogadores: this.formBuilder.array([])
    });
  }

  adicionarAtleta(): void {
    if (this.atleta !== undefined &&
      this.atleta !== '') {
      this.formTime.value.jogadores.push(this.atleta);
      this.atleta = '';
    }
  }

  removerAtleta(atleta): void {
    const index = this.formTime.value.jogadores.indexOf(atleta, 0);
    if (index > -1) { this.formTime.value.jogadores.splice(index, 1); }
  }

  botaoConfirmar(): void {
    this.memoriaService.timeMemoria(this.formTime.value);
    this.router.navigate(['/time']);
  }

  botaoVoltar(): void {
    this.router.navigate(['/inicio']);
  }

  get placeholderJogador(): string {
    return this.formTime.value.jogadores <= 0 ? 'Quem vai jogar?' : '+1';
  }

  get numAtletas(): number {
    return this.formTime.value.jogadores.length;
  }

  get isBotaoConfirmar(): boolean {
    return this.formTime.value.jogadores <= 0 ? false : true;
  }
}
