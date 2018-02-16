import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Heroe } from '../interfaces/heroe.interface';
import  "rxjs/Rx";

@Injectable()
export class HeroesService {

  heroesUrl : string = "https://angular-firebase-beb37.firebaseio.com/heroes.json";
  heroeUrl : string = "https://angular-firebase-beb37.firebaseio.com/heroes";

  constructor(private http : Http) {

  }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.post(this.heroesUrl, body, { headers })
      .map(res => { 
        // console.log(res.json());
        return res.json();
      })
  }

  actualizarHeroe(heroe:Heroe, key$:string){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    let url = `${this.heroeUrl}/${key$}.json`;

    return this.http.put(url, body, { headers })
      .map(res => { 
        return res.json();
      })
  }

  obtenerHeroe(key$:string){
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.get(url)
      .map(res => res.json());
  }

  listarHeroes(){
    let url = `${this.heroesUrl}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  eliminarHeroe(key$:string){
    let url = `${this.heroeUrl}/${key$}.json`;

    return this.http.delete(url)
      .map(res => { 
        return res.json();
      })
  }

}
