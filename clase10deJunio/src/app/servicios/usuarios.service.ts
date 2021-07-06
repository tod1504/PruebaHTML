import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
z
  private apiUrl = 'https://api-pw-ith.herokuapp.com/api/usuarios';
  
  constructor(private http: HttpClient) { }
  // get
  public getUsuario() {
    return this.http.get(this.apiUrl + '/18330457');
  }
  // post
  public postUsuario( body: any ) {
    return this.http.post( this.apiUrl, body );
  }
// delete
  public deleteUsuario (_id: any){
    return this.http.delete(this.apiUrl + '/' + _id);
  }
}
