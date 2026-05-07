import { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout';
import { NotFound } from './features/not-found/not-found';
import { Resume } from './features/resume/resume';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout
  },
  {
    path: 'resume',
    component: Resume,
  },
  {
    path: '**',
    component: NotFound
  }
];
