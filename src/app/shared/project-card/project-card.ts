import { Component, Input } from '@angular/core';
import { Chips } from "../chips/chips";

@Component({
  selector: 'app-project-card',
  imports: [Chips],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() data: any;
  @Input() isLinkPresent = true;
  @Input() isBodyPresent = true;
  @Input() isImgPresent = true;
}
