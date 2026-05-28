import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from "../features/home/home";
import { Contacts } from "../features/contacts/contacts";
import { About } from "../features/about/about";
import { Skills } from "../features/skills/skills";
import { Projects } from "../features/projects/projects";
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { Footer } from './components/footer/footer';
import { Certificate } from "../features/certificate/certificate";

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, Home, Contacts, About, Skills, Projects, Footer, Certificate],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic'
      });
    }
  }
}
