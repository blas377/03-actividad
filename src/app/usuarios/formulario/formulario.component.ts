import { Component } from '@angular/core';
import { Usuarios } from '../interface.usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  constructor(private varServicio: UsuariosService) {
    this.nuevoUsuario = this.varServicio.obtenerNuevoUsuario;
  }

  nuevoUsuario: Usuarios;

  agrega() {        
    this.varServicio.agregarUsuario(this.nuevoUsuario);
    this.nuevoUsuario = this.varServicio.obtenerNuevoUsuario;
  }

}
