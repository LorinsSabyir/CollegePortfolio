import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu() {
    this.isMenuOpen.set(false);
  }
}
