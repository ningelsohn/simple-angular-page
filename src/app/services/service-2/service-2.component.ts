import { Component, OnInit } from '@angular/core';
import { Item, Service } from '../service.model';

@Component({
  selector: 'app-service-2',
  templateUrl: './service-2.component.html',
  styleUrls: ['./service-2.component.scss']
})
export class Service2Component implements OnInit {

  service2: Service = new Service(
    "services.service-2.title",
    "services.service-2.desc", 
    "/assets/img/coding.jpg",
    [
      new Item("services.service-2.info-1.title", "services.service-2.info-1.desc", "fa-brands fa-java fa-fw"),
      new Item("services.service-2.info-2.title", "services.service-2.info-2.desc", "fa-brands fa-angular fa-fw"),
      new Item("services.service-2.info-3.title", "services.service-2.info-3.desc", "fa-brands fa-python fa-fw"),
      new Item("services.service-2.info-4.title", "services.service-2.info-4.desc", "fas fa-people-group fa-fw"),
      new Item("services.service-2.info-5.title", "services.service-2.info-5.desc", "fa-brands fa-git fa-fw")
    ]
  )

  constructor() { }

  ngOnInit(): void {
  }

}
