import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './landing/home/home.component';
import { AboutComponent } from './landing/about/about.component';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ProjectsComponent } from './landing/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ProjectsComponent // Importa el componente independiente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
