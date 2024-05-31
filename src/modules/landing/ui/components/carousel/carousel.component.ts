import { NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'landing-carousel',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input('item') tecnology! : {
    name :string,
    description:string,
    image:string,
    url:string
  }
}
