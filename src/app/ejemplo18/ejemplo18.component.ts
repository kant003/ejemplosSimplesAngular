import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo18',
  templateUrl: './ejemplo18.component.html',
  styleUrls: ['./ejemplo18.component.css']
})
export class Ejemplo18Component implements OnInit {

  public form: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['Angel', Validators.required],
      email: ['angel@gmail.com', [Validators.email, Validators.required] ]
    })
  }

  onSubmit(formValue) {
    alert('El formulario se ha enviado correctamente:'+ formValue.email)
  }
}
