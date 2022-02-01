import { Component, Input } from '@angular/core';
import { Productos } from '../interface.usuarios';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  @Input() productos:Productos[] = [];

  borrado: Productos = {
    nombre: '',
    precio: 0
  };

  /**
   * Método que elimina el objeto solicitado
   */
  elimina() {
    // Recorre el array de objetos y obtiene su indice para posteriormente eliminar el objeto solicitado
    this.productos.forEach(e => {
      if (e.nombre === this.borrado.nombre) {
        this.productos.splice(this.productos.indexOf(e), 1);
      }
    });

    // Reinicia el objeto para vaciarlo
    this.borrado = {
      nombre: '',
      precio: 0
    };
  }
}
