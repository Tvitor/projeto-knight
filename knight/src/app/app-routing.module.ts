import { KnightFormComponent } from './knight-form/knight-form.component';
import { HallofHeroesComponent } from './hallof-heroes/hallof-heroes.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnightComponent } from './knight/knight.component';

const routes: Routes = [
  {path:'new', component:KnightFormComponent},
  {path:'edit/:_id', component:KnightFormComponent},
  {path:'knight', component: KnightComponent},
  {path:'hall', component: HallofHeroesComponent},
  {path:'', redirectTo: 'knight', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
