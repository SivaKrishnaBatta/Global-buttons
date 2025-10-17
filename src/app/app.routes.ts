import { Routes } from '@angular/router';
import { ButtonDemo } from './pages/button-demo/button-demo';
import { Testing } from './pages/testing/testing';
import { ButtonSizes } from './components/button-sizes/button-sizes';

export const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonDemo },
  { path: 'testing', component: Testing },
  { path: 'button-sizes', component: ButtonSizes }
];