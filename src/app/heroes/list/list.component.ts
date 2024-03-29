import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroeNombres:string[] = ['Capitan America','Viuda Negra','Hulk','Spiderman', 'Thor','Iron Man'];
  public heroeBorrado?:string;

  borrarUltimoHeroe():void{
    this.heroeBorrado = this.heroeNombres.pop();
  }
}
