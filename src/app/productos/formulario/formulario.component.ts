import { Component, Output, EventEmitter } from '@angular/core';
import { Productos } from '../interface.productos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  @Output() elementoEnviar:EventEmitter<Productos> = new EventEmitter();

  nuevoProducto:Productos = {
    nombre: '',
    precio: 0
  };

    /**
     * Método para agregar un objeto solicitado al array de productos
     */
    agrega() {
      // Si no está vacío el nombre del producto se procede a crearlo
      if (this.nuevoProducto.nombre !== '') {
  
        // Se añade el objeto al array de objetos
        this.elementoEnviar.emit(this.nuevoProducto);

        // Reinicia el objeto para vaciarlo
        this.nuevoProducto = {
          nombre: '',
          precio: 0
        };
      }
    }

}
