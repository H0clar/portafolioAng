import { Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { AboutComponent } from './landing/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // otras rutas
];

export default routes;
