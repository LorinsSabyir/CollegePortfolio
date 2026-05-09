import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  protected readonly email = 'lorins.sabyir@gmail.com';
  protected readonly githubUrl = 'https://github.com/LorinsSabyir';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/lei-lorenz-xavier-gomelan-3ba150356/';

}
