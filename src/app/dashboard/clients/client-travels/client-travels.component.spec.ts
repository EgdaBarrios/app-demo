import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTravelsComponent } from './client-travels.component';

describe('ClientTravelsComponent', () => {
  let component: ClientTravelsComponent;
  let fixture: ComponentFixture<ClientTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTravelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
