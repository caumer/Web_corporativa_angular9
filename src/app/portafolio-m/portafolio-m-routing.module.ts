import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PortafolioComponent} from './portafolio/portafolio.component';

const routes: Routes = [
  { path: '', component: PortafolioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioMRoutingModule { }
