import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { SectionComponent } from '@/modules/landing/ui/components/section/section.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { NgxGlideComponent } from 'ngx-glide';
import { NgIf } from '@angular/common';
import { ScreenSizeService } from '@/modules/landing/services/breakpoint.service';
@Component({
  selector: 'landing-cyber-days-discount',
  standalone: true,
  imports: [
    SectionComponent,
    CarouselComponent,
    NgIf,
    NgxGlideComponent
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './cyber-days-discount.component.html',
  styleUrl: './cyber-days-discount.component.css'
})
export class CyberDaysDiscountComponent {

  @ViewChild('ngxCyber') ngxGlide!: NgxGlideComponent;

  constructor(
    private screenSizeService: ScreenSizeService
  ) {}

  currentScreenSize!: string;

  perView:number = 3;


  ngOnInit(): void {
    this.screenSizeService.screenSize$.subscribe((size) => {
      this.currentScreenSize = size;

      if (!this.ngxGlide) return

      if (this.currentScreenSize === 'Mobile') {
        this.perView = 1;
      }
      if (this.currentScreenSize === 'Tablet') {
        this.perView = 2;
      }
      if (this.currentScreenSize === 'Desktop') {
        this.perView = 3;
      }
      
      this.ngxGlide.recreate();
    });
  }
}
