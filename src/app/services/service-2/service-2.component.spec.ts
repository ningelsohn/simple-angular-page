import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service2Component } from './service-2.component';

describe('Service2Component', () => {
  let component: Service2Component;
  let fixture: ComponentFixture<Service2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Service2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Service2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
