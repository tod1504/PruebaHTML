import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() { }
  
  title = 'AngularJueves';
  
  setCuerpo: boolean = true
  
  rcvCuerpo($event) {
    this.setCuerpo = $event
  }
  
}
