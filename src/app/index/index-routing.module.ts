import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';


import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: '', component: InicioComponent },

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
