import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { KnightComponent } from './knight/knight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HallofHeroesComponent } from './hallof-heroes/hallof-heroes.component';
import { KnightFormComponent } from './knight-form/knight-form.component';
import { CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    KnightComponent,
    HallofHeroesComponent,
    KnightFormComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
