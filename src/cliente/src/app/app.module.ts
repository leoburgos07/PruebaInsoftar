import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';


const rutas: Routes = [
  {
    path: 'listarUsuarios',
    component : ListarUsuariosComponent
    
  },
 
]


@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
