import { CreateKnightComponent } from './listKnight/create-knight/create-knight.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { KnightComponent } from './listKnight/knight/knight.component';
import { FormsModule } from '@angular/forms';
import { HallofHeroesComponent } from './listKnight/hallof-heroes/hallof-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    KnightComponent,
    HallofHeroesComponent,
    CreateKnightComponent

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
