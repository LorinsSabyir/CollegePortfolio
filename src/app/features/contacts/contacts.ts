import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  protected readonly email = 'your.email@example.com';
  protected readonly githubUrl = 'https://github.com/';
  protected readonly linkedinUrl = 'https://www.linkedin.com/';

}
