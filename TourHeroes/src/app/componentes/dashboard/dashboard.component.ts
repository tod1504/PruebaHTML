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

  constructor(private her: HeroesService) {
    this.heroes = this.her.getHeroes();
  }
  

  ngOnInit(): void {
  }

}
