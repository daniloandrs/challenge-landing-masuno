import { Component } from '@angular/core';
import { HeaderComponent } from '@/modules/landing/ui/components/header/header.component';
import { BannerComponent } from '@/modules/landing/ui/components/banner/banner.component';
import { CyberDaysDiscountComponent } from '@/modules/landing/ui/components/cyber-days-discount/cyber-days-discount.component';
import { BetterTechnologiesComponent } from '@/modules/landing/ui/components/better-technologies/better-technologies.component';
import { FooterComponent } from '@/modules/landing/ui/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    CyberDaysDiscountComponent,
    BetterTechnologiesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
