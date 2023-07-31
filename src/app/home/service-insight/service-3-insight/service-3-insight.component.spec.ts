import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3InsightComponent } from './service-3-insight.component';

describe('Service3InsightComponent', () => {
  let component: Service3InsightComponent;
  let fixture: ComponentFixture<Service3InsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Service3InsightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Service3InsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
