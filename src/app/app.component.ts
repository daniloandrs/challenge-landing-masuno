import { FooterComponent } from '@/modules/landing/ui/components/footer/footer.component';
import { HeaderComponent } from '@/modules/landing/ui/components/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'challenge-landing-masuno';
}
