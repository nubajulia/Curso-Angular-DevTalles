import { NgModule } from '@angular/core';

import { MainPageComponent } from './pages/main-page.component';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { AgregarRazaComponent } from './components/agregar-raza/agregar-raza.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  declarations: [MainPageComponent, ListaComponent, AgregarRazaComponent],
})

export class CaballosModule {

}
