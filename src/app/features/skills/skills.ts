import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly columns = [
    {
      title: 'Frontend Matrix',
      icon: 'icons/layout.png',
      items: ['Angular', 'React', 'UI/UX Design', 'HTML/CSS/JS', 'Tailwind CSS'],
    },
    {
      title: 'Backend Core',
      icon: 'icons/server.png',
      items: ['Python', 'Java', 'PHP', 'WordPress', 'REST APIs'],
    },
    {
      title: 'Systems Interface',
      icon: 'icons/processor.png',
      items: ['IoT Architecture', 'Networking', 'Sensors', 'Hardware Proto'],
    },
  ];

}
