import { Component } from '@angular/core';
import { TrazoTitleComponent } from '../trazo-title/trazo-title.component';
import { CouponComponent } from '../coupon/coupon.component';

@Component({
  selector: 'landing-banner',
  standalone: true,
  imports: [
    TrazoTitleComponent,
    CouponComponent
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
