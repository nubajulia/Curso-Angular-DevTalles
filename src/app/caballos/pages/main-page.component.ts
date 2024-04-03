import { Component, OnInit } from '@angular/core';
import { Caballo } from '../interfaces/caballo.interface';
import { CaballosService } from '../services/caballos.service';

@Component({
  selector: 'app-caballos-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent{

  constructor(private caballosService: CaballosService) {

  }

  get caballos(): Caballo[]{
    return [...this.caballosService.caballos]
  }

  borrarCaballoById(id:string):void{
    this.caballosService.borrarCaballoById(id);
  }

  nuevoCaballo(caballo:Caballo):void{
    this.caballosService.nuevoCAballo(caballo);
  }
}
