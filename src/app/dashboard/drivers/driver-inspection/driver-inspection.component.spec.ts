import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverInspectionComponent } from './driver-inspection.component';

describe('DriverInspectionComponent', () => {
  let component: DriverInspectionComponent;
  let fixture: ComponentFixture<DriverInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
