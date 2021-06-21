import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDataEditComponent } from './client-data-edit.component';

describe('ClientDataEditComponent', () => {
  let component: ClientDataEditComponent;
  let fixture: ComponentFixture<ClientDataEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDataEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
