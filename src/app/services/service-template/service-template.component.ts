import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-template',
  templateUrl: './service-template.component.html',
  styleUrls: ['./service-template.component.scss']
})
export class ServiceTemplateComponent implements OnInit {

  @Input() service! : Service;

  constructor() { }

  ngOnInit(): void {
  }

}
