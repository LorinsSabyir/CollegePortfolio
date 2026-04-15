import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from "../features/home/home";
import { Contacts } from "../features/contacts/contacts";
import { About } from "../features/about/about";
import { Skills } from "../features/skills/skills";
import { Projects } from "../features/projects/projects";

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, Home, Contacts, About, Skills, Projects],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
