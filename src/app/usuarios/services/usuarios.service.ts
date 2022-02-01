import { Injectable } from '@angular/core';
import { Usuarios } from '../interface.usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() {
    console.log("Servicios");
  }

  private _listaUsuarios: Usuarios[] = [
    {
      nombre: 'Blas',
      edad: 24,
      profesion: 'desarrollador'
    },
    {
      nombre: 'David',
      edad: 25,
      profesion: 'back-end'
    },
    {
      nombre: 'Rueda',
      edad: 26,
      profesion: 'front-end'
    },
  ]

  private _nuevoUsuario: Usuarios = {
    nombre: '',
    edad: 0
  }

  private _usuarioEliminado: Usuarios = {
    nombre: '',
    edad: 0
  }

  get obtenerListaUsuarios(): Usuarios[] {
    return [...this._listaUsuarios];
  }

  get obtenerNuevoUsuario(): Usuarios {
    return this._nuevoUsuario;
  }

  get obtenerUsuarioEliminado(): Usuarios {
    return this._usuarioEliminado;
  }

  agregarUsuario() {
    if(this._nuevoUsuario.nombre.trim().length > 0)
    this._nuevoUsuario.nombre = this._nuevoUsuario.nombre.trim().toLocaleLowerCase();
    // this._nuevoUsuario.profesion = this._nuevoUsuario.profesion.trim().toLocaleLowerCase();
    this._listaUsuarios.push(this._nuevoUsuario);
  }

  eliminaUsuario() {
    this._listaUsuarios.forEach(e => {
      if (e.nombre === this._usuarioEliminado.nombre) {
        this._listaUsuarios.splice(this._listaUsuarios.indexOf(e), 1);
      }
    })

    this._usuarioEliminado = {
      nombre: '',
      edad: 0
    }
  }
}
