import { Injectable, Renderer2, RendererFactory2, afterNextRender, afterRender } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private renderer!: Renderer2;
  private screenSize = new BehaviorSubject<string>('');

  screenSize$ = this.screenSize.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    afterNextRender(() => {
      this.renderer = rendererFactory.createRenderer(null, null);
      this.initScreenSizeListener();
    })
  }

  private initScreenSizeListener(): void {
    this.updateScreenSize();
    this.renderer.listen('window', 'resize', () => {
      this.updateScreenSize();
    });
  }

  private updateScreenSize(): void {
    // afterRender(() => {
        const width = window.innerWidth;

        if (width < 768) {
          this.screenSize.next('Mobile');
        } else if (width >= 768 && width < 1024) {
          this.screenSize.next('Tablet');
        } else {
          this.screenSize.next('Desktop');
        }
    // })

  }
}
