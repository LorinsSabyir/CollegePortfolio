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
      image: "images/github.png",
      description:
        'A Capstone Project for the Bachelor of Science in Information Technology program, developed using Flutter for the frontend, Firebase for the backend, and FlutterFlow as the visual editor.',
      // TODO: change link to the actual project repository
      link: "https://github.com/LorinsSabyir/RoadWatch_Mobile_Ticketing",
      tags: ['Flutter', 'Dart', 'Firebase'],
    },
    {
      title: 'PGDDN Capitol DTR System',
      image: "images/github.png",
      description:
        'A headless WordPress implementation featuring a highly optimized frontend interface and a modular backend content model.',
      link: "https://github.com/LorinsSabyir",
      tags: ['Angular', 'Tailwind', 'Rest API'],
    },
    {
      title: 'Traffic Forecasting and Analysis',
      image: "images/github.png",
      description:
        'A Java-powered tool with a connected web interface that intercepts, visualizes, and breaks down network traffic for analysis.',
      link: "https://github.com/LorinsSabyir",
      tags: ['Python', 'TensorFlow', 'Scikit-learn'],
    },
    {
      title: 'DeJeanVer Online Bikeshop POS System',
      image: "images/github.png",
      description:
        'A Java-powered tool with a connected web interface that intercepts, visualizes, and breaks down network traffic for analysis.',
      link: "https://github.com/LorinsSabyir/DeJeanVer-online-bike-shop-System",
      tags: ['HTML/CSS', 'PHP', 'Bootstrap'],
    },
  ];

}
