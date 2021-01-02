import { ConfirmacionComponent } from './../confirmacion/confirmacion.component';
import { ContactoMModule } from './../contacto-m.module';
import { from } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Data } from 'src/app/models/data';
import { ServiceService } from 'src/app/back/service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  getFormm;
  formMsj;
  submitted: boolean;

  data: Data = {
    id: 0,
    nombres: '',
    apellidos: '',
    telefono: null,
    correo: '',  
    mensaje: ''
  }

  constructor(private serviceData: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getForm();
  }

  submitForm(formMsj: NgForm) {
    if(formMsj.valid) {
      this.submitted = true;
    }
  }

  formLocal() {
    localStorage.setItem('msj2', JSON.stringify(this.data));
    }
 
  getForm() {
    this.serviceData.getDataUser().subscribe(data => {
      this.getFormm = data;
      console.log(this.getFormm);
      
    }, err => console.error(err)
    );
  }


  formRegister() {
    this.serviceData.SaveForm(this.data).subscribe(res => {
      if (res) {
        localStorage.setItem('msj', JSON.stringify(res));
        this.router.navigate(['/contacto/confirmacion']);
        
      } else {
        // TODO: Logica que se ejecuta si el backend responde con false;
      }
    }, err => {
      console.error(err);
      this.router.navigate(['/page404/page404']);
    })
  }  

}
