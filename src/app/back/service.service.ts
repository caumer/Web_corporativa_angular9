import { from, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private urlAPI = 'http://localhost:56842/contactos';

  constructor(private http: HttpClient) { }

  getDataUser (){
    return this.http.get(this.urlAPI);
  }

  SaveForm(data: Data){
    console.log(data);
    return this.http.post(this.urlAPI, data);
  }


}
