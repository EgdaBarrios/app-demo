import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDocComponent } from './driver-doc.component';

describe('DriverDocComponent', () => {
  let component: DriverDocComponent;
  let fixture: ComponentFixture<DriverDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
