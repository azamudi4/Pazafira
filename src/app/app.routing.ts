import {Routes, RouterModule} from '@angular/router';

import { ProductosComponent} from './components/productos/productos.component'
import {PoesiaComponent} from './components/poesia/poesia.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const appRoutes: Routes = [
    {path:'', component:ProductosComponent},
    {path:'Productos', component:ProductosComponent},
    {path:'Poesia', component:PoesiaComponent},
    {path:'Formulario', component:FormularioComponent },
    {path:'Nosotros', component:NosotrosComponent}
];

export const routing = RouterModule.forRoot(appRoutes);