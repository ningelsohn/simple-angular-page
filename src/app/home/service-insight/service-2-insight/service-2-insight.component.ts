import { Component, OnInit } from '@angular/core';
import { Service, Item } from 'src/app/services/service.model';

@Component({
  selector: 'app-service-2-insight',
  templateUrl: './service-2-insight.component.html',
  styleUrls: ['./service-2-insight.component.scss']
})
export class Service2InsightComponent implements OnInit {

  service2: Service = new Service(
    "services.service-2.title",
    "services.service-2.desc", 
    "/assets/img/coding.jpg", 
    [
      new Item("services.service-2.info-1.title", "services.service-2.info-1.desc", "fas fa-magnifying-glass-chart fa-fw"),
      new Item("services.service-2.info-2.title", "services.service-2.info-2.desc", "fas fa-cart-shopping fa-fw"),
      new Item("services.service-2.info-3.title", "services.service-2.info-3.desc", "fas fa-chart-pie fa-fw"),
      new Item("services.service-2.info-4.title", "services.service-2.info-4.desc", "fas fa-tree-city fa-fw"),
      new Item("services.service-2.info-5.title", "services.service-2.info-5.desc", "fas fa-tree-city fa-fw"),
    ]
  )

  constructor() { }

  ngOnInit(): void {
  }

}
