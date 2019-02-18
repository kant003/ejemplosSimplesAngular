import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejemplo16Component } from './ejemplo16/ejemplo16.component';
import { Seccion1Component } from './ejemplo16/seccion1/seccion1.component';
import { Seccion2Component } from './ejemplo16/seccion2/seccion2.component';

const routes: Routes = [
  {path:'', component: Ejemplo16Component, 
    children: [
      {path:'secc1', component:Seccion1Component},
      {path:'secc2', component:Seccion2Component},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ejemplo16RoutingModule { }
