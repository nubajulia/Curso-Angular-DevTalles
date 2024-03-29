import { NgModule } from '@angular/core';

import { MainPageComponent } from './pages/main-page.component';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';


@NgModule({
  imports: [CommonModule],
  exports: [MainPageComponent],
  declarations: [MainPageComponent, ListaComponent],
})

export class CaballosModule {

}
