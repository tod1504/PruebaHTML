import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  personajes = ['Chabelo', 'Babo', 'Goku'];
  
  constructor() { }
  
  leerPersonajes() {
    return this.personajes;
  }
}
