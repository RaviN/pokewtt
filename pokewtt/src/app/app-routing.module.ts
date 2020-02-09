import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleListComponent } from './example-list/example-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  { path: 'example', component: ExampleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
