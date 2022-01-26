import { Component } from '@angular/core';
import { Productos } from '../interface.productos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent{

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
