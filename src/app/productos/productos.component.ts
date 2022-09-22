import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';



const ELEMENT_DATA: Producto[] = [
  {Id: 1, Nombre: 'Hydrogen',  Valor: 1.0079, Cantidad:1},
  {Id: 2, Nombre: 'Helium', Valor: 4.0026, Cantidad:1},
  {Id: 3, Nombre: 'Lithium', Valor: 6.941, Cantidad:1},
  {Id: 4, Nombre: 'Beryllium', Valor: 9.0122, Cantidad:1},
  {Id: 5, Nombre: 'Boron', Valor: 10.811, Cantidad:1},
  {Id: 6, Nombre: 'Carbon', Valor: 12.0107, Cantidad:1},
  {Id: 7, Nombre: 'Nitrogen', Valor: 14.0067, Cantidad:1},
  {Id: 8, Nombre: 'Oxygen', Valor: 15.9994, Cantidad:1},
  {Id: 9, Nombre: 'Fluorine', Valor: 18.9984, Cantidad:1},
  {Id: 10, Nombre: 'Neon', Valor: 20.1797, Cantidad:1},
];
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  columnasMostrar: string[] = [ 'Nombre', 'Valor', 'Cantidad', 'Eliminar'];
  productos: Array<Producto> = ELEMENT_DATA;


  constructor() { }
  
  ngOnInit(): void {
  }
  
  eliminarProducto(id:number){
    this.productos = this.productos.filter(e=>e.Id != id);
  }
}
