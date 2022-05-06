import { Component } from "@angular/core";

//NOTA: AQUI ESTAMOS CREANDO UN COMPONENTE NOSOTROS, YA QUE EL ARCHIVO app.component.ts Y EL ARCHIVO app.component.html Y EL ARCHIVO app.componente.css YA VIENEN POR DEFAULT EN EL PROYECTO DE ANGULAR, ASI QUE ESTO DEL CONTADOR LO CREAMOS NOSOTROS, PERO SIEMPRE QUE CREEMOS UN COMPONENTE DEBEMOS AÑADIR EL NOMBRE DE SU CLASE EN EL ARCHIVO app.module.ts DONDE DICE declarations, AHI DEBEMOS PONER: ContadorComponente YA QUE ASI SE LLAMA LA CLASE DE ESTE COMPONENTE ABAJO
@Component({
    selector: 'app-contador', //este es el nombre del componente, y ese componente lo tienen todos los archivos que tengan la palabra component en su nombre, si nos fijamos en la carpeta src hay un archivo llamado index.html, y ahi jala un componente llamado app-contador, eso se refiere a este componente de aqui, y eso muestra el contador.component.html debido a la siguiente linea donde se definió ese archivo html para que se jale en el archivo index.html al poner ahi app-contador
  templateUrl: './contador.component.html', //esto es para tener un archivo html por separado de este archivo para que se muestre en el index.html de la carpeta src, esto se usa en el caso que tengamos varias lineas de codigo html, pero si son pocas lineas de html entonces o se puede usar este o se puede usar el atributo template que está en la siguiente linea, con lo cual se especifica codigo html aqui directamente 
  /* template: `  //Leer lo que se explicó en la anterior linea para entender esto, y aqui se puso backticks (osea el ``) para que se pudiera escribir mas de 1 linea de codigo html directamente aqui, pero pues esto se comentó porque al final mejor se usó lo de arriba del templateUrl
    <h1>Hola desde app.componente.ts</h1>
    <h1>Esto es una prueba</h1>
  `, */
  styleUrls: ['./contador.component.css'] //esto carga estilos css para el html que se va a mostrar en el index.html al hacer referencia al app-contador, esto ya que aqui se especifica el archivo contador.component.css, el cual es un archivo de estilos css pero que solo se va a aplicar al html del archivo contador.component.html de esta carpeta
})
export class ContadorComponent {
    public titulo: string = 'Contador App'; //esto es una variable que podemos usar en el archivo contador.component.html de esta carpeta, y se hace igual que en Django que se pone doble llave y el nombre de la variable, en este caso la llave se llama titulo y su valor es 'Contador App', checar ese archivo. Tambien se puede poner el modificador de acceso si es public o private (si no se pone hay que recordar que en typescript automaticamente es public), y si es publico pues sí podemos usar esa variable en el html, pero asi es private entonces no podremos usarla en el html, solo podremos usarla aqui y ya
    numero: number = 10; //mandamos la variable numero en el archivo app.component.html

    base: number = 5;

    //Lo siguiente se comentó porque al final se hizo con el metodo llamado acumular que está abajo para que asi tengamos un solo metodo:
    /*sumar() {
        this.numero += 1;
    }

    restar() {
        this.numero -= 1;
    }*/

    acumular(valor: number) {
        this.numero += valor;
    }
}