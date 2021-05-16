import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page';
import { AjustePlacarPage } from './pages/placar/ajuste-placar/ajuste-placar.page';
import { PlacarPage } from './pages/placar/placar.page';
import { ResumoPage } from './pages/placar/resumo/resumo.page';
import { AjusteTimePage } from './pages/time/ajuste-time/ajuste-time.page';
import { TimePage } from './pages/time/time.page';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '*', component: InicioPage },
  { path: 'inicio', component: InicioPage },
  { path: 'placar', component: PlacarPage },
  { path: 'ajuste-placar', component: AjustePlacarPage },
  { path: 'time', component: TimePage },
  { path: 'ajuste-time', component: AjusteTimePage },
  { path: 'resumo', component: ResumoPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
