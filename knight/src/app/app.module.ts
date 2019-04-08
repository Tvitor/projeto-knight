import { CreateKnightComponent } from './listKnight/create-knight/create-knight.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { KnightComponent } from './listKnight/knight/knight.component';
import { FormsModule } from '@angular/forms';
import { HallofHeroesComponent } from './listKnight/hallof-heroes/hallof-heroes.component';
import { KnightOtherStatsComponent } from './knight-other-stats/knight-other-stats.component';
import { EditKnightComponent } from './edit-knight/edit-knight.component';

@NgModule({
  declarations: [
    AppComponent,
    KnightComponent,
    HallofHeroesComponent,
    CreateKnightComponent,
    KnightOtherStatsComponent,
    EditKnightComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
