import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'landing-section',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input() logo : boolean = false;
}
