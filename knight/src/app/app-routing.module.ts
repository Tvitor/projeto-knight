import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnightComponent } from './listKnight/knight/knight.component';

const routes: Routes = [

  {path:'knight', component: KnightComponent},
  {path:'', redirectTo: 'knight', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
