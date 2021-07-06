import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  formulario: FormGroup;

  constructor(private uSer: UsuariosService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [],
      correo: [],
      rol: []
    });
  }
  guardar(): void {
    if (this.formulario.status === 'VALID') {
      console.log(this.formulario);
    }
  }

}
