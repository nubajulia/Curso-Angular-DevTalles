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
  public borrar: EventEmitter<number> = new EventEmitter();

  borrarCaballo(index:number):void{
    this.borrar.emit(index);
  }
}
