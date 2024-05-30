import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterTechnologiesComponent } from './better-technologies.component';

describe('BetterTechnologiesComponent', () => {
  let component: BetterTechnologiesComponent;
  let fixture: ComponentFixture<BetterTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetterTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetterTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
