import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneradorNumerosService {

  constructor() { }

  obtenerNumerosAleatorios(cantidad: number) {
    const listaNumeros = []
    for(let i=0;i<cantidad;i++){
      listaNumeros.push(Math.round( Math.random() *10 ))
    }
    return listaNumeros;
  }

  obtenerNumerosAleatoriosUsandoObserbables(cantidad: number): Observable<any>{

    return new Observable( (observe)=> {

      if(cantidad < 0) observe.error('No puedes usar una cantidad negativa')

      for(let i=0;i<cantidad;i++){
        const aleatorio = Math.round( Math.random() *10 )
        observe.next( aleatorio )
      }
      observe.complete()
    })

  }

}
