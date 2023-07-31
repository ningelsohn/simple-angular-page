import { Component, OnInit } from '@angular/core';
import { Item, Service } from 'src/app/services/service.model';

@Component({
  selector: 'app-service-3-insight',
  templateUrl: './service-3-insight.component.html',
  styleUrls: ['./service-3-insight.component.scss']
})
export class Service3InsightComponent implements OnInit {
  
  service3: Service = new Service(
    "services.service-3.title",
    "services.service-3.desc", 
    "/assets/img/bikepacking.jpg", 
    [
      new Item("services.service-3.info-1.title", "services.service-3.info-1.desc", "fas fa-magnifying-glass-chart fa-fw"),
      new Item("services.service-3.info-2.title", "services.service-3.info-2.desc", "fas fa-magnifying-glass-chart fa-fw"),
      new Item("services.service-3.info-3.title", "services.service-3.info-3.desc", "fas fa-magnifying-glass-chart fa-fw"),
      new Item("services.service-3.info-4.title", "services.service-3.info-4.desc", "fas fa-magnifying-glass-chart fa-fw"),
    ]
  )

  constructor() { }

  ngOnInit(): void {
  }

}
