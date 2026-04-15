import { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout
  },
  {
    path: '**',
    component: NotFound
  }
];
