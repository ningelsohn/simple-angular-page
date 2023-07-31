import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service1InsightComponent } from './service-1-insight.component';

describe('Service1InsightComponent', () => {
  let component: Service1InsightComponent;
  let fixture: ComponentFixture<Service1InsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Service1InsightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Service1InsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
