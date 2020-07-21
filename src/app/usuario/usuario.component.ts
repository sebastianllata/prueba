import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
usuario:Usuario[]=[
  {id:1,user:"jonas",pass:"123"},
  {id:1,user:"jon",pass:"12345"},
  {id:1,user:"jona",pass:"12"},
  {id:1,user:"jo",pass:"1234"},


]
  

  constructor() { }

  ngOnInit(): void {
  }

}
