import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera.component';



@NgModule({
  declarations: [
    CabeceraComponent
  ],
  exports:[
    CabeceraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CabeceraModule { }
