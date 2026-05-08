import { Component } from '@angular/core';
import { SkillCard } from "../../shared/skill-card/skill-card";

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly columns = [
    {
      title: 'Frontend Matrix',
      icon: 'icons/layout.png',
      items: ['Angular', 'Flutter', 'Figma', 'UI/UX Design', 'HTML/CSS/JS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Backend Core',
      icon: 'icons/server.png',
      items: ['Python', 'Java', 'Laravel', 'PHP', 'WordPress', 'MySQL', 'Firebase'],
    },
    {
      title: 'Systems Interface',
      icon: 'icons/processor.png',
      items: ['IoT Architecture', 'Networking', 'Sensors', 'Arduino'],
    },
  ];

}
