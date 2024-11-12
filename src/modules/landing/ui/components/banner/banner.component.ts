import { Component } from '@angular/core';
import { TrazoTitleComponent } from '../trazo-title/trazo-title.component';
import { CouponComponent } from '../coupon/coupon.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IpServiceService } from '@/modules/landing/services/ip.service';
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

  ip!:string;

  constructor(private ipService:IpServiceService) { }
  async ngOnInit() {}


  async getIp() {
    this.ipService.getIPAddress().subscribe( ({ip}) => {
      console.log(ip)
      this.ip = ip;
    });
  }

}
