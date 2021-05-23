import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { Cuerpo2Component } from './componentes/cuerpo2/cuerpo2.component';

const rutas: Routes = [
    { path: 'cuerpo', component: CuerpoComponent },
    { path: 'cuerpo2', component: Cuerpo2Component },
    { path: '**', pathMatch: 'full', redirectTo: 'cuerpo' }
]

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

