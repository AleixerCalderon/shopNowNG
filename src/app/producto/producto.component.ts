import { Component, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto;
  @Output() Id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
