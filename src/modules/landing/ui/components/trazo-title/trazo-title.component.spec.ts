import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazoTitleComponent } from './trazo-title.component';

describe('TrazoTitleComponent', () => {
  let component: TrazoTitleComponent;
  let fixture: ComponentFixture<TrazoTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrazoTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrazoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
