import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './contacto/contacto.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';

import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  { path: '', component: ContactoComponent },
  { path: 'confirmacion', component: ConfirmacionComponent, canActivate: [GuardGuard] },
  { path: '**', redirectTo: '/no-encontrado'}
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoMRoutingModule { }
