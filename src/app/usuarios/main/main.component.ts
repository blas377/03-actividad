import { Component } from '@angular/core';
import { Productos, Usuarios } from '../interface.usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-main-usuarios',
  templateUrl: './main.component.html'
})

export class MainComponentUsuarios{
  listaUsuarios:Usuarios[]=[];
  nuevoUsuario:Usuarios;
  usuarioEliminado:Usuarios;

  constructor(private varServicio:UsuariosService){
    this.listaUsuarios = varServicio.obtenerListaUsuarios;
    this.nuevoUsuario = varServicio.obtenerNuevoUsuario;
    this.usuarioEliminado = varServicio.obtenerUsuarioEliminado;
  }

  productos: Productos[] = [
    {
      nombre: 'Teclado',
      precio: 24,
      categoria: 'Periférico'
    },
    {
      nombre: 'Ratón',
      precio: 16,
      categoria: 'Periférico'
    },
    {
      nombre: 'Altavoces',
      precio: 100
    },
    {
      nombre: 'Pantalla',
      precio: 250,
    }
  ];

  /**
   * 
   * @param producto recibido de main.component como (elementoEnviar)="agrega($event)" del hijo formulario
   */
  agrega(producto:Productos) {
    this.productos.push(producto);
  }

}
