import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'trazo-title',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './trazo-title.component.html',
  styleUrl: './trazo-title.component.css'
})
export class TrazoTitleComponent {

  @Input() type :TypeTrazo = 'one';
}

export type TypeTrazo = 'one' | "two"
