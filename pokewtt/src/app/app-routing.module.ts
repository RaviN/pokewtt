import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';


const routes: Routes = [
  { path: '', redirectTo: 'pokeList', pathMatch: 'full' },
  { path: 'pokeList', component: PokelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
