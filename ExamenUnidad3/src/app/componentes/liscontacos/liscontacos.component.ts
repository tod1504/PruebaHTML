import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/servicios/contactos.service';

export interface Con {
  id: number;
  nombre: string;
  apellidos: string;
  genero: string;
  descripcion: string;
}

@Component({
  selector: 'app-liscontacos',
  templateUrl: './liscontacos.component.html',
  styleUrls: ['./liscontacos.component.css']
})
export class LiscontacosComponent implements OnInit {

  contactos: Con[];
  
  constructor(private contSer: ContactosService) {
    this.contactos = this.contSer.getContactos();
  }

  ngOnInit(): void {
    
  }

  botonClick(){
    console.log("Boton funciona");
  }

}
