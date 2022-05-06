import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent, //si tenemos archivos de modulos en cada carpeta de modulo que tengamos como la carpeta de heroes y la carpeta de contador entonces aqui no tenemos que poner los componentes, aqui solo se pondrían todos nuestros componentes en el caso que no tengamos los archivos de modulos creados para nuestros modulos, pero es buena practica tener esos archivos de modulos
  ],
  imports: [ //aqui se pondrán todos los modulos que tengamos, osea el nombre de las clases de los archivos de modulos
    BrowserModule,
    HeroesModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
