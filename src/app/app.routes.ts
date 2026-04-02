import { Routes } from '@angular/router';
import { home_routes } from './features/home/home.routes';
import { MainLayout } from './main-layout/main-layout';
import { about_routes } from './features/about/about.routes';
import { contacts_routes } from './features/contacts/contacts.routes';
import { projects_routes } from './features/projects/projects.routes';
import { resume_routes } from './features/resume/resume.routes';
import { skills_routes } from './features/skills/skills.routes';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      ...home_routes,
      ...about_routes,
      ...contacts_routes,
      ...projects_routes,
      ...resume_routes,
      ...skills_routes
    ]
  },
  {
    path: '**',
    component: NotFound
  }
];
