import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chips } from "../chips/chips";

@Component({
  selector: 'app-skill-card',
  imports: [CommonModule, Chips],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  @Input() data: any;
}
