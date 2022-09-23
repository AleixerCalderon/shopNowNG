import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';

const DATA: Producto[] = [
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
   
  productos: Array<Producto> = DATA; 
  producto: Producto = new Producto(0,"",0,0);
  verFormulario: boolean = false;
  mg:string = "";

  constructor() { }

  ngOnInit(): void {
  }


  eliminarProducto(id: number){      
    this.productos = this.productos.filter(e=>e.Id != id);
  }

  agregarProducto(){
    this.mg = "";
    if (this.producto.Nombre.length>0  && this.producto.Valor >0  && this.producto.Cantidad > 0) {      
      this.productos.push(this.producto);
      this.producto = new Producto(0,"",0,0);
    } else {
         this.mg = "Faltan datos";
    }
  }

}
