import { PortafolioMModule } from './portafolio-m/portafolio-m.module';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from '../app/contacto-m/guards/guard.guard';
import { Page404Component } from './Component/page404/page404.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'portafolio', loadChildren: () => import('./portafolio-m/portafolio-m.module').then(m => m.PortafolioMModule) },
  { path: 'servicios', loadChildren: () => import('./servicios-m/servicios-m.module').then(m => m.ServiciosMModule) },
  { path: 'acerca', loadChildren: () => import('./acerca-m/acerca-m.module').then(m => m.AcercaMModule) },
  { path: 'contacto', loadChildren: () => import('./contacto-m/contacto-m.module').then(m => m.ContactoMModule) },
  { path: '**', redirectTo: 'no-encontrado'},
  { path: 'no-encontrado', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
