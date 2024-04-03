import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Caballo } from '../../interfaces/caballo.interface';

@Component({
    selector: 'app-caballos-lista',
    templateUrl: './lista.component.html',
    styleUrl: './lista.component.css',
})

export class ListaComponent {

  @Input()
  public caballosList: Caballo[] = [{
    nombre:'Hannoveriano',
    precio:4900
  }];

  @Output()
  public borrar: EventEmitter<string> = new EventEmitter();

  borrarCaballo(id?:string):void{

    if(!id) return;
    this.borrar.emit(id);
  }
}
