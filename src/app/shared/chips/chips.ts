import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chips',
  imports: [CommonModule],
  templateUrl: './chips.html',
  styleUrl: './chips.css',
})
export class Chips {
  @Input() text = '';

  @Input() color = 'primary';
}
