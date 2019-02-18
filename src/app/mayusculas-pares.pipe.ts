import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculasPares'
})
export class MayusculasParesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let resultado = ''
    const letras = value.split('')
    for(let i=0;i<letras.length;i++){
      if(i%2 == 0){
        resultado += letras[i].toUpperCase();
      }
    }
    return resultado
  }

}
