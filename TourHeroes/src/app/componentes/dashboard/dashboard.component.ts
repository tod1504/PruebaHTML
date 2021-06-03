import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes.service';

export interface Heroe {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Heroe[];
  he: Heroe[];
  
  
  
  constructor(private her: HeroesService) {
    this.heroes = this.her.getHeroes();
    this.he = [
      { id: this.heroes[1].id, name: this.heroes[1].name },
      { id: this.heroes[3].id, name: this.heroes[3].name },
      { id: this.heroes[5].id, name: this.heroes[5].name },
      { id: this.heroes[7].id, name: this.heroes[7].name }
    ]
  }
  

  ngOnInit(): void {
  }

}
