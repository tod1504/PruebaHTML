import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formulario: FormGroup;

  constructor( private fb: FormBuilder, 
                private val: Validators ) {
    this.crearFormulario();
 }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(10)]],
      apellido: ["", [Validators.required]],
      correo: ["", [Validators.required]]
    });
  }

  cargarFormulario(){
    this.formulario.setValue({
      nombre: "Oscar",
      apellido: "Lopez",
      correo: "oscar@gmail.com"
    });
  }

  guardar(){
    console.log( this.formulario );
  }
}
