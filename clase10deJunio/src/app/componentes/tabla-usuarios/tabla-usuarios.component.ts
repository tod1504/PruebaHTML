import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  usuarios: any[] = [];
  
  constructor(private uSer: UsuariosService,
              private fb: FormBuilder) {
    this.uSer.getUsuario().subscribe(res => {
      this.usuarios = res['usuarios'];
      console.log(this.usuarios);
    });
  }

  ngOnInit(): void {
  }

  actualizar(item: any){
    console.log('actualizando');
    console.log(this.usuarios[item]);
  }
  eliminando(item: any): void {
    console.log('eliminando');
    const _id = this.usuarios[item]._id;
    
    console.log(_id);
    this.uSer.deleteUsuario(_id).subscribe(res => {
      console.log(res);
    });
  }

}
