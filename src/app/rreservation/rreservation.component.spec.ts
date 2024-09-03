import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RreservationComponent } from './rreservation.component';

describe('RreservationComponent', () => {
  let component: RreservationComponent;
  let fixture: ComponentFixture<RreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RreservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
