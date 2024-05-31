import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'landing-header',
  standalone: true,
  imports: [
    NgClass,
    LogoComponent,
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  top! : boolean;

  scrollHandler = () => {

  }

  ngOnInit() {
    // window.addEventListener('scroll', this.scrollHandler)
    console.log({top:this.top})
  }
}
