import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AcercaComponent } from './acerca/acerca.component';

const routes: Routes = [
  { path: '', component: AcercaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcercaMRoutingModule { }
