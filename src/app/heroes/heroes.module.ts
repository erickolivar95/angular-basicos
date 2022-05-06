import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//NOTA: es recomendable que se cree un archivo de module como este por cada modulo que tengamos en nuestro proyecto, osea por cada carpeta justo dentro de la carpeta app, como si eso fueran los paquetes en spring por ejemplo, asi que por ejemplo aqui tenemos el modulo llamado heroes, osea la carpeta heroes, y cada modulo tendrá sus componentes, y cada componente se pondrá en subcarpetas dentro de la carpeta de modulos, por eso la carpeta de modulo heroes tiene las subcarpetas de heroe y listado, porque ambas tienen un archivo de componente

@NgModule({
    declarations: [ //aqui van los componentes que tengamos en nuestro modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //aqui van los componentes que queremos usarlos o llamarlos fuera de este modulo de heroes, en este caso solo el componente de ListadoComponent queremos llamar fuera de este modulo ya que se usa en el archivo app.component.html ya que ahi se llama a ese componente, y eso está afuera de este modulo de heroes, osea de la carpeta heroes, y como lo queremos usar afuera pues debemos incluir ese componente en exports
        ListadoComponent
    ],
    imports: [ //esto es para importar funcionalidades de modulos dentro de este modulo, en este caso el CommonModule es un modulo que Angular ya trae por default y esto nos permite usar directivas en nuestros html como en el archivo listado.component.html que usamos for y if else dentro de ese archivo, y el CommonModule nos permite eso
        CommonModule
    ]
})
export class HeroesModule {}