import { Component } from '@angular/core';
import { TrazoTitleComponent } from '../trazo-title/trazo-title.component';

@Component({
  selector: 'landing-coupon',
  standalone: true,
  imports: [
    TrazoTitleComponent
  ],
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css'
})
export class CouponComponent {

}
