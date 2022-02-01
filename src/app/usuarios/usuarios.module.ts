import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { MainComponentUsuarios } from './main/main.component';
import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    MainComponentUsuarios,
    ListadoComponent,
    FormularioComponent
  ],
  exports: [
    MainComponentUsuarios
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ]
})

export class UsuariosModule { }
