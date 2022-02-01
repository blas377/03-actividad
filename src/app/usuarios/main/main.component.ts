import { Component } from '@angular/core';
import { Usuarios } from '../interface.usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-main-usuarios',
  templateUrl: './main.component.html'
})

export class MainComponentUsuarios{
  listaUsuarios:Usuarios[]=[];

  constructor(private varServicio:UsuariosService){
    this.listaUsuarios = varServicio.obtenerListaUsuarios;
  }

}
