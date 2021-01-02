import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoMRoutingModule } from './contacto-m-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    ContactoComponent,
    ConfirmacionComponent
  ],
  imports: [
    CommonModule,
    ContactoMRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
})
export class ContactoMModule { }
