import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes.service';

export interface Heroe {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = [];

  constructor(private her: HeroesService) {
    this.heroes = this.her.getHeroes();
  }

  ngOnInit(): void {
  }

}
