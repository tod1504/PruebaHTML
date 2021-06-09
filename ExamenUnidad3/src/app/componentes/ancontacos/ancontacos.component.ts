import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-ancontacos',
  templateUrl: './ancontacos.component.html',
  styleUrls: ['./ancontacos.component.css']
})
export class AncontacosComponent implements OnInit {

  info = {
    nombre: 'Juan',
    appellido: "Hernandez",
    correo: "juan@gmail"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  guardar(fo) {
    console.log(fo.form.value);
  }
}
