import { Component } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent  {

  heroes:any[] = [];
  loading:boolean = true;

  constructor(private heroesService : HeroesService) { 
    this.listarHeroes();
  }

  listarHeroes(){
    this.heroesService.listarHeroes()
    .subscribe( data => {
      // console.log(data);
      // for (let key$ in data)
      // {
      //   // console.log(data[key$]);
      //   this.heroes.push(data[key$]);
      // }
      // console.log(this.heroes);

      setTimeout(()=> {
        this.heroes = data;
        this.loading = false;
      }, 2000)

      
    });
  }

  borrarHeroe(key$:string){
    this.heroesService.eliminarHeroe(key$)
      .subscribe(response => {
        if(response){
          console.error(response);
        } else {
          delete this.heroes[key$];
        }

        
    });

    this.listarHeroes();
  }

 
}
