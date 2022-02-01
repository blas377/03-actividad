import { Injectable } from '@angular/core';
import { Usuarios } from '../interface.usuarios';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private _listaUsuarios: Usuarios[] = [
    {
      nombre: 'blas',
      edad: 24,
      profesion: 'desarrollador'
    },
    {
      nombre: 'david',
      edad: 25,
      profesion: 'back-end'
    },
    {
      nombre: 'rueda',
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
    return this._listaUsuarios;
  }

  get obtenerNuevoUsuario(): Usuarios {
    return this._nuevoUsuario;
  }

  get obtenerUsuarioEliminado(): Usuarios {
    return this._usuarioEliminado;
  }

  agregarUsuario(dato:Usuarios) {
    if(dato.nombre.trim().length > 0){
      let flag:Boolean = true;
      dato.nombre = dato.nombre.toLocaleLowerCase();

      this._listaUsuarios.forEach(e => {
        if (e.nombre.toLocaleLowerCase() === dato.nombre.toLocaleLowerCase()) {        
          flag = false;
        }
      })

      if (flag){
        this._listaUsuarios.push(dato);
      }
    }

    this._nuevoUsuario = {
      nombre: '',
      edad: 0
    }
    
  }

  eliminaUsuario(dato:Usuarios) {    
    this._listaUsuarios.forEach(e => {
      if (e.nombre.toLocaleLowerCase() === dato.nombre.toLocaleLowerCase()) {        
        this._listaUsuarios.splice(this._listaUsuarios.indexOf(e), 1);
      }
    })

    this._usuarioEliminado = {
      nombre: '',
      edad: 0
    }
  }

  constructor() {}
}
