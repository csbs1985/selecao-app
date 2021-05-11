import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page';
import { AjustePlacarPage } from './pages/placar/ajuste-placar/ajuste-placar.page';
import { PlacarPage } from './pages/placar/placar.page';
import { ResumoPage } from './pages/placar/resumo/resumo.page';
import { AjusteSelecionarPage } from './pages/selecionar/ajuste-selecionar/ajuste-selecionar.page';
import { SelecionarPage } from './pages/selecionar/selecionar.page';
import { SplashPage } from './pages/splash/splash.page';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '*', component: InicioPage },
  { path: 'inicio', component: InicioPage },
  { path: 'placar', component: PlacarPage },
  { path: 'ajuste-placar', component: AjustePlacarPage },
  { path: 'selecionar', component: SelecionarPage },
  { path: 'ajuste-selecionar', component: AjusteSelecionarPage },
  { path: 'resumo', component: ResumoPage },
  { path: 'splash', component: SplashPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
