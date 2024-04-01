import { Component, OnInit } from '@angular/core';
import { Caballo } from '../interfaces/caballo.interface';

@Component({
  selector: 'app-caballos-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent{

  public caballos: Caballo[] = [{
    nombre: 'Breton',
    precio: 2500
  },{
    nombre: 'Lipizzano',
    precio: 8750
  },{
    nombre: 'Hispano-árabe',
    precio: 1500
  }];

  nuevoCAballo(caballo: Caballo):void{
    this.caballos.push(caballo);
  }

  borrarCaballo(index:number){
    this.caballos.splice(index,1);
  }
}
