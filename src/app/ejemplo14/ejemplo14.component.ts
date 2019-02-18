import { Component, OnInit } from '@angular/core';
import { GeneradorNumerosService } from '../generador-numeros.service';

@Component({
  selector: 'app-ejemplo14',
  templateUrl: './ejemplo14.component.html',
  styleUrls: ['./ejemplo14.component.css']
})
export class Ejemplo14Component implements OnInit {

  public cantidad : number = 5
  numeros = []

  constructor(private generadorNumeros:GeneradorNumerosService) { }

  ngOnInit() {
  }

  generarNumerosMal(){
    this.numeros = 
      this.generadorNumeros.obtenerNumerosAleatorios(this.cantidad);
  }

  generarNumerosObservable(){
    this.numeros = []

    this.generadorNumeros.obtenerNumerosAleatoriosUsandoObserbables(this.cantidad).subscribe(
      response => { // me llegan cosas
        console.log('Llega...', response)
        this.numeros.push(response)
      },
      error=>{ // me llega un error
        alert(error)
      },
      () => { // se termina
        console.log('Hemos termina de obtener todos los numeros')
      }

    )
  }
}
