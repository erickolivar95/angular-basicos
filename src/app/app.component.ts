import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //este es el nombre del componente, y ese componente lo tienen todos los archivos que tengan la palabra component en su nombre, si nos fijamos en la carpeta src hay un archivo llamado index.html, y ahi jala un componente llamado app-root, eso se refiere a este componente de aqui, y eso muestra el app.component.html debido a la siguiente linea donde se definió ese archivo html para que se jale en el archivo index.html al poner ahi app-root
  templateUrl: './app.component.html', //esto es para tener un archivo html por separado de este archivo para que se muestre en el index.html de la carpeta src, esto se usa en el caso que tengamos varias lineas de codigo html, pero si son pocas lineas de html entonces o se puede usar este o se puede usar el atributo template que está en la siguiente linea, con lo cual se especifica codigo html aqui directamente 
  /* template: `  //Leer lo que se explicó en la anterior linea para entender esto, y aqui se puso backticks (osea el ``) para que se pudiera escribir mas de 1 linea de codigo html directamente aqui, pero pues esto se comentó porque al final mejor se usó lo de arriba del templateUrl
    <h1>Hola desde app.componente.ts</h1>
    <h1>Esto es una prueba</h1>
  `, */
  styleUrls: ['./app.component.css'] //esto carga estilos css para el html que se va a mostrar en el index.html al hacer referencia al app-root, esto ya que el aqui se especifica el archivo app.component.css, el cual es un archivo de estilos css pero que solo se va a aplicar al html del archivo app.component.html de esta carpeta
})
export class AppComponent {
  

}
