import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { SectionComponent } from '@/modules/landing/ui/components/section/section.component';
import { TrazoTitleComponent } from '../trazo-title/trazo-title.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { NgFor, NgIf } from '@angular/common';
import { NgxGlideComponent } from 'ngx-glide';
import { ScreenSizeService } from '@/modules/landing/services/breakpoint.service';

@Component({
  selector: 'landing-better-technologies',
  standalone: true,
  imports: [
    SectionComponent,
    TrazoTitleComponent,
    CarouselComponent,
    NgFor,
    NgIf,
    NgxGlideComponent
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './better-technologies.component.html',
  styleUrl: './better-technologies.component.css'
})
export class BetterTechnologiesComponent {

  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  tecnologies : Array<{
    name:string
    description:string
    image: string
    url : string
  }> = []

  currentScreenSize!: string;

  perView:number = 1;

  constructor(
    private screenSizeService: ScreenSizeService
  ) {
    this.tecnologies =  [
      {
        name:'PHP',
        description : `
        <span class="text-bold text-lg">PHP es un lenguaje de código abierto muy popular</span><br> 
        <span class="text-bold text-lg">especialmente adecuado para el desarrollo web y que</span><br> 
        <span class="text-bold text-lg">puede ser incrustado en HTML. echo "¡Hola, soy un script</span> 
        de PHP!"; ?>
        `,
        image : './assets/images/language_php.png',
        url: './php'
      },
      {
        name:'PYTHON',
        description : `
        <span class="text-bold text-lg">Python es un lenguaje de programación ampliamente</span><br> 
        <span class="text-bold text-lg">utilizado en las aplicaciones web, el desarrollo de software,</span><br> 
        <span class="text-bold text-lg">la ciencia de datos y el machine learning (ML).</span><br>
        `,
        image : './assets/images/language_python.png',
        url: './python'
      },
      {
        name:'DISEÑO UX/UI',
        description : `
        <span class="text-bold text-lg">Aquí es donde entra la UX (experiencia de usuario) y la UI </span><br>
        <span class="text-bold text-lg">(interfaz de usuario), que tienen la función de que el </span><br>
        <span class="text-bold text-lg">usuario encuentre lo que busca en el menor tiempo posible </span><br>
        y además tenga una buena experiencia al visitar la web.
        `,
        image : './assets/images/ui.png',
        url: './design'
      }
    ]
  }

  ngOnInit(): void {
    this.screenSizeService.screenSize$.subscribe((size) => {
      this.currentScreenSize = size;

      if (!this.ngxGlide) return

      if (this.currentScreenSize === 'Mobile') {
        this.perView = 1;
      }
      if (this.currentScreenSize === 'Tablet') {
        this.perView = 1;
      }
      if (this.currentScreenSize === 'Desktop') {
        this.perView = 1;
      }
      
      this.ngxGlide.recreate();
    });
  }

}
