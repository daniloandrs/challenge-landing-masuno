import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberDaysDiscountComponent } from './cyber-days-discount.component';

describe('CyberDaysDiscountComponent', () => {
  let component: CyberDaysDiscountComponent;
  let fixture: ComponentFixture<CyberDaysDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberDaysDiscountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberDaysDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
