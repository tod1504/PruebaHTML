import { Component } from '@angular/core';
import { PersonajesService } from 'src/app/servicios/personajes.service';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html'
})

export class CuerpoComponent{
  mostrar = true;
  personajes = [];
  
  informacion = {
    autor: 'Cristiano Ronaldo',
    frase: 'Siuuuuuuuuu'
  };

  constructor(private servicioPersonajes: PersonajesService) {
    console.log(this.servicioPersonajes.leerPersonajes());
    this.personajes = this.servicioPersonajes.leerPersonajes();
  }
}