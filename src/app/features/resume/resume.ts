import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../main-layout/components/navbar/navbar';

@Component({
  selector: 'app-resume',
  imports: [Navbar, RouterLink],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {

}
