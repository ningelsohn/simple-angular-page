import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service-carousel',
  templateUrl: './service-carousel.component.html',
  styleUrls: ['./service-carousel.component.scss']
})
export class ServiceCarouselComponent implements OnInit {

  @ViewChild('next') nextButton: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    // Programmatically starting Carousel
    // (Safari refuses to run carousel without manually triggering the first slide)
    setTimeout(() => { 
      this.nextButton?.nativeElement.click();
    }, 5000);
  }
}
