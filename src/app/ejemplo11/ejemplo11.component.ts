import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo11',
  templateUrl: './ejemplo11.component.html',
  styleUrls: ['./ejemplo11.component.css']
})
export class Ejemplo11Component implements OnInit {

  public frasePeligrosa='hola <script>alert("aaa")</script>'
  constructor() { }

  ngOnInit() {
  }

}


