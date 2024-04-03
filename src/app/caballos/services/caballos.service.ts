import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Caballo } from '../interfaces/caballo.interface';


@Injectable({
  providedIn: 'root'
})

export class CaballosService {

  public caballos: Caballo[] = [{
    id: uuid(),
    nombre: 'Breton',
    precio: 2500
  },{
    id: uuid(),
    nombre: 'Lipizzano',
    precio: 8750
  },{
    id: uuid(),
    nombre: 'Hispano-árabe',
    precio: 1500
  }];

  nuevoCAballo(caballo: Caballo):void{

    const nuevoCaballo: Caballo = {id: uuid(),...caballo};
    this.caballos.push(nuevoCaballo);

  }

  //borrarCaballo(index:number){
    //this.caballos.splice(index,1);
  //}

  borrarCaballoById(id:string){
    this.caballos = this.caballos.filter(caballo => caballo.id !== id);
  }

}
