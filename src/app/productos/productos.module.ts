import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent,
    ListadoComponent,
    FormularioComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class ProductosModule { }
