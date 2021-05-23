
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './components/about/about.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { HomeComponent } from './components/home/home.component'


const rutas: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
