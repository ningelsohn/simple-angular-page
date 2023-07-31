import { Component, OnInit } from '@angular/core';
import { Item, Service } from '../service.model';

@Component({
  selector: 'app-service-1',
  templateUrl: './service-1.component.html',
  styleUrls: ['./service-1.component.scss']
})
export class Service1Component implements OnInit {

  service1: Service = new Service(
    "services.service-1.title",
    "services.service-1.desc", 
    "/assets/img/handshake.jpg", 
    [
      new Item("services.service-1.info-1.title", "services.service-1.info-1.desc", "fas fa-signature fa-fw"),
      new Item("services.service-1.info-2.title", "services.service-1.info-2.desc", "fas fa-calendar-days fa-fw"),
      new Item("services.service-1.info-3.title", "services.service-1.info-3.desc", "fas fa-location-dot fa-fw"),
      new Item("services.service-1.info-4.title", "services.service-1.info-4.desc", "fas fa-ruler-vertical fa-fw"),
    ]
  )

  constructor() { }

  ngOnInit(): void {
  }

}
