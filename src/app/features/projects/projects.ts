import { Component } from '@angular/core';
import { ProjectCard } from "../../shared/project-card/project-card";

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = [
    {
      title: 'RoadWatch Digital Ticketing System',
      // TODO: change image link to a real image of the project
      image: "images/39c94595-cf87-4d0f-93d7-f6241b27fd24.jpg",
      description:
        'A dark-themed real-time dashboard built with Angular that communicates with backend services to display live device states and metrics.',
      // TODO: change link to the actual project repository
      link: "https://github.com/LorinsSabyir",
      tags: ['Flutter', 'Dart', 'Firebase'],
    },
    {
      title: 'PGDDN Capitol DTR System',
      image: "images/39c94595-cf87-4d0f-93d7-f6241b27fd24.jpg",
      description:
        'A headless WordPress implementation featuring a highly optimized frontend interface and a modular backend content model.',
      link: "https://github.com/LorinsSabyir",
      tags: ['Angular', 'Tailwind', 'Rest API'],
    },
    {
      title: 'Traffic Forecasting and Analysis',
      image: "images/39c94595-cf87-4d0f-93d7-f6241b27fd24.jpg",
      description:
        'A Java-powered tool with a connected web interface that intercepts, visualizes, and breaks down network traffic for analysis.',
      link: "https://github.com/LorinsSabyir",
      tags: ['Python', 'TensorFlow', 'Scikit-learn'],
    },
    {
      title: 'DeJeanVer Online Bikeshop POS System',
      image: "images/39c94595-cf87-4d0f-93d7-f6241b27fd24.jpg",
      description:
        'A Java-powered tool with a connected web interface that intercepts, visualizes, and breaks down network traffic for analysis.',
      link: "https://github.com/LorinsSabyir",
      tags: ['HTML/CSS', 'PHP', 'Bootstrap'],
    },
  ];

}
