import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public nombre: string = 'Ironman';
  public edad: number = 45;

  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero():void{
    this.nombre = "Thor"
  }

  changeEdad():void{
    this.edad = 40
  }

  resetForm():void{
    //this.nombre = 'ironman';
    this.edad = 45;

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    })
  }
}
