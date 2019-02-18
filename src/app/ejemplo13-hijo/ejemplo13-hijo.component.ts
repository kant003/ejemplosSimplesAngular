import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejemplo13-hijo',
  templateUrl: './ejemplo13-hijo.component.html',
  styleUrls: ['./ejemplo13-hijo.component.css']
})
export class Ejemplo13HijoComponent implements OnInit {

  @Output() edadCambia = new EventEmitter<number>();

  private _edad = 9

  set edad(valor: number) {
    this._edad = valor
    this.edadCambia.emit(this._edad)
  }

  get edad(): number {
    return this._edad
  }

  constructor() { }

  ngOnInit() {
    this.edadCambia.emit(this._edad)
  }

}
