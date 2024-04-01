import { Component, EventEmitter, Output } from '@angular/core';
import { Caballo } from '../../interfaces/caballo.interface';

@Component({
    selector: 'app-agregar-raza',
    templateUrl: './agregar-raza.component.html',
    styleUrl: './agregar-raza.component.css',
})

export class AgregarRazaComponent {

  @Output()
  public nuevoCaballo : EventEmitter<Caballo> = new EventEmitter();

  public caballo: Caballo = {
    nombre: '',
    precio: 0
  };

  agregarCaballo():void{

    if(this.caballo.nombre.length === 0) return;

    this.nuevoCaballo.emit(this.caballo);

    this.caballo = {nombre:'',precio:0};
  }

}
