import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInsightTemplateComponent } from './service-insight-template.component';

describe('ServiceInsightTemplateComponent', () => {
  let component: ServiceInsightTemplateComponent;
  let fixture: ComponentFixture<ServiceInsightTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInsightTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInsightTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
