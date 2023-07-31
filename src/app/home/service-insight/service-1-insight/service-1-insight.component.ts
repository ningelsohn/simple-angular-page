import { Component, OnInit } from '@angular/core';
import { Service, Item } from 'src/app/services/service.model';

@Component({
  selector: 'app-service-1-insight',
  templateUrl: './service-1-insight.component.html',
  styleUrls: ['./service-1-insight.component.scss']
})
export class Service1InsightComponent implements OnInit {

  service1: Service = new Service(
    "services.service-1.title",
    "services.service-1.desc", 
    "/assets/img/handshake.jpg",
    [
      new Item("services.service-1.info-1.title", "services.service-1.info-1.desc", "fas fa-file-signature fa-fw"),
      new Item("services.service-1.info-2.title", "services.service-1.info-2.desc", "fas fa-magnifying-glass-location fa-fw"),
      new Item("services.service-1.info-3.title", "services.service-1.info-3.desc", "fas fa-flask-vial fa-fw"),
      new Item("services.service-1.info-4.title", "services.service-1.info-4.desc", "fas fa-chart-line fa-fw"),
    ]
  )

  constructor() { }

  ngOnInit(): void {
  }

}
