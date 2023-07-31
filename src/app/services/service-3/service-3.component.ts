import { Component, OnInit } from '@angular/core';
import { Item, Service } from '../service.model';

@Component({
  selector: 'app-service-3',
  templateUrl: './service-3.component.html',
  styleUrls: ['./service-3.component.scss']
})
export class Service3Component implements OnInit {

  service3: Service = new Service(
    "services.service-3.title",
    "services.service-3.desc", 
    "/assets/img/bikepacking.jpg", 
    [
      new Item("services.service-3.info-1.title", "services.service-3.info-1.desc", "fas fa-bicycle fa-fw"),
      new Item("services.service-3.info-2.title", "services.service-3.info-2.desc", "fa-solid fa-basketball fa-fw"),
      new Item("services.service-3.info-3.title", "services.service-3.info-3.desc", "fas fa-guitar fa-fw"),
      new Item("services.service-3.info-4.title", "services.service-3.info-4.desc", "fas fa-gamepad fa-fw"),
    ]
  )

  constructor() { }

  ngOnInit(): void {
  }

}
