import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  formulario = new FormGroup({
      no_control: new FormControl(),
      nombre: new FormControl(),
      correo: new FormControl(),
      password: new FormControl(),
      rol: new FormControl()
  });
  
  usuarios: any[] = [];
  body: any[] = [];
  c = 1;
  constructor(private uSer: UsuariosService,
              private fb: FormBuilder) {
    this.uSer.getUsuario().subscribe(res => {
      this.usuarios = res['usuarios'];
      for (let u of this.usuarios) {
        this.c = this.c + 1;
      }
    });
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      no_control: [],
      nombre: [],
      correo: [],
      password: [],
      rol: []
    });
  }
  guardar(): void {
    if (this.formulario.status === 'VALID') {
      this.formulario.controls['no_control'].setValue(this.c);
      this.c += 5;
      console.log(this.formulario.value);
      this.uSer.postUsuario(this.formulario.value).subscribe(res => {
        console.log(res);
      });
    }
  }

}
