import { Component, OnInit } from '@angular/core';
import { Caballo } from '../interfaces/caballo.interface';
import { CaballosService } from '../services/caballos.service';

@Component({
  selector: 'app-caballos-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent{

  constructor(public caballosService: CaballosService) {

  }

}
