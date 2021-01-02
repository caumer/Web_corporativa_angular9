import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosMComponent } from './servicios-m.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [{ path: '', component: ServiciosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosMRoutingModule { }
