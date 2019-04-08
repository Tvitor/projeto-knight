import { EditKnightComponent } from './edit-knight/edit-knight.component';
import { KnightOtherStatsComponent } from './knight-other-stats/knight-other-stats.component';
import { CreateKnightComponent } from './listKnight/create-knight/create-knight.component';
import { HallofHeroesComponent } from './listKnight/hallof-heroes/hallof-heroes.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnightComponent } from './listKnight/knight/knight.component';

const routes: Routes = [
  {path:'createKnight', component: CreateKnightComponent},
  {path:'knight', component: KnightComponent},
  {path:'hall', component: HallofHeroesComponent},
  {path:'knightstats', component: KnightOtherStatsComponent},
  {path:'editKnight', component: EditKnightComponent},
  {path:'', redirectTo: 'knight', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
