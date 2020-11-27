import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './views/emprestimo/listar/listar.component';
import { HomeComponent } from './views/home/home.component';
import { CadastrarLivroComponent } from './views/livro/cadastrar/cadastrar.component';
import { LivroComponent } from './views/livro/livro.component';
const routes: Routes = [{
  path:'app/livro',
  component: LivroComponent
  
},
{
  path:"",
  component: HomeComponent
},
{
path:'app/cadastrarlivro',
component : CadastrarLivroComponent
},
{
path:'app/cadastrarlivro/:id',
component : CadastrarLivroComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
