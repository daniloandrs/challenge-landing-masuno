import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBetterTechnologiesComponent } from './page-better-technologies.component';

describe('PageBetterTechnologiesComponent', () => {
  let component: PageBetterTechnologiesComponent;
  let fixture: ComponentFixture<PageBetterTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBetterTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBetterTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
