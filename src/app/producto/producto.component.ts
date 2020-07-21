import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto:Producto[]=[
    {id:1,nombre:"leche",cantidad:12,precio:12},
    {id:2,nombre:"arroz",cantidad:12,precio:3.20},
    {id:3,nombre:"galleta",cantidad:12,precio:5},
    {id:4,nombre:"l",cantidad:12,precio:10},
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
