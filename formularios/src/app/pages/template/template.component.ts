import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  info ={
    nombre: 'Juan',
    appellido: "Hernandez",
    correo: "juan@gmail"
  }
  constructor() { }

  ngOnInit(): void {
  }

  guardar(fo){
    console.log(fo.form.value);
  }

}
