import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'landing-logo',
  standalone: true,
  imports: [
    RouterLink
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

}
