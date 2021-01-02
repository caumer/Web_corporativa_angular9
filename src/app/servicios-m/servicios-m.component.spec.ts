import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosMComponent } from './servicios-m.component';

describe('ServiciosMComponent', () => {
  let component: ServiciosMComponent;
  let fixture: ComponentFixture<ServiciosMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
