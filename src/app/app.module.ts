import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { CaballosModule } from './caballos/caballos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    CaballosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
