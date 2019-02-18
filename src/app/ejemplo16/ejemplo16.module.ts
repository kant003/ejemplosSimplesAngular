import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ejemplo16RoutingModule } from './ejemplo16-routing.module';
import { Ejemplo16Component } from './ejemplo16/ejemplo16.component';
import { Seccion1Component } from './ejemplo16/seccion1/seccion1.component';
import { Seccion2Component } from './ejemplo16/seccion2/seccion2.component';

@NgModule({
  declarations: [Ejemplo16Component, Seccion1Component, Seccion2Component],
  imports: [
    CommonModule,
    Ejemplo16RoutingModule
  ]
})
export class Ejemplo16Module { }
