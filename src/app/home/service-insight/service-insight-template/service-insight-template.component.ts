import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service.model';

@Component({
  selector: 'app-service-insight-template',
  templateUrl: './service-insight-template.component.html',
  styleUrls: ['./service-insight-template.component.scss']
})
export class ServiceInsightTemplateComponent implements OnInit {

  @Input() service!: Service;

  constructor() { }

  ngOnInit(): void {
  }

}
