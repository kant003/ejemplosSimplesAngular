import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo9',
  templateUrl: './ejemplo9.component.html',
  styleUrls: ['./ejemplo9.component.css']
})
export class Ejemplo9Component implements OnInit {

  public nombre
  public email

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert('Voy a enviar el formulario al backend:'
      + this.nombre +':'+ this.email)
    //... validamos el formulario (validación en el cliente)
    //... nos comunicamos con el backend (enviamos los datos)
  }
}
