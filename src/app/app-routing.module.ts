import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./components/heroes/heroe.component";

const routes : Routes = [
    {   path : 'heroes', component : HeroesComponent },
    {   path : 'heroe/:id', component : HeroeComponent },
    {   path : '**', pathMatch : 'full', redirectTo : 'heroes' }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes)],
    exports : [ RouterModule]
})

export class AppRoutingModule { }