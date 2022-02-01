import { Component } from '@angular/core';
import { Usuarios } from '../interface.usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  constructor(private varServicio: UsuariosService) {
    this.usuarioEliminado = this.varServicio.obtenerUsuarioEliminado;
    this.listaUsuarios = this.varServicio.obtenerListaUsuarios;
  }

  listaUsuarios: Usuarios[];
  usuarioEliminado: Usuarios;

  elimina() {    
    this.varServicio.eliminaUsuario(this.usuarioEliminado);
    this.usuarioEliminado = this.varServicio.obtenerUsuarioEliminado;
  }
  
}
