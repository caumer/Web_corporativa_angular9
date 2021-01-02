import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosMRoutingModule } from './servicios-m-routing.module';
import { ServiciosMComponent } from './servicios-m.component';


@NgModule({
  declarations: [ServiciosMComponent],
  imports: [
    CommonModule,
    ServiciosMRoutingModule
  ]
})
export class ServiciosMModule { }
