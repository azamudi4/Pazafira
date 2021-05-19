import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

/**
 * ReactiveFormsModule: Formularios reactivos, son formularios que reaccionan a las interacciones del usuario
 * FormsModule: Trabaja solo con formularios
 */

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PoesiaComponent } from './components/poesia/poesia.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProductosComponent,
    PoesiaComponent,
    FormularioComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule, routing,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
