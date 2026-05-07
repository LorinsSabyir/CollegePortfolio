import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = [
    {
      title: 'IoT Control Hub',
      description:
        'A dark-themed real-time dashboard built with Angular that communicates with backend services to display live device states and metrics.',
      tags: ['Angular', 'Python', 'WebSockets'],
    },
    {
      title: 'E-Commerce Matrix',
      description:
        'A headless WordPress implementation featuring a highly optimized frontend interface and a modular backend content model.',
      tags: ['WordPress', 'PHP', 'UI/UX'],
    },
    {
      title: 'Network Packet Analyzer',
      description:
        'A Java-powered tool with a connected web interface that intercepts, visualizes, and breaks down network traffic for analysis.',
      tags: ['Java', 'Networking', 'Frontend'],
    },
  ];

}
