import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service2InsightComponent } from './service-2-insight.component';

describe('Service2InsightComponent', () => {
  let component: Service2InsightComponent;
  let fixture: ComponentFixture<Service2InsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Service2InsightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Service2InsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
