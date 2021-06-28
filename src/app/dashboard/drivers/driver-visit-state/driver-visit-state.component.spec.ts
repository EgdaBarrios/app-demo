import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverVisitStateComponent } from './driver-visit-state.component';

describe('DriverVisitStateComponent', () => {
  let component: DriverVisitStateComponent;
  let fixture: ComponentFixture<DriverVisitStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverVisitStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverVisitStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
