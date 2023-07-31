import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss']
})
export class CarouselSlideComponent implements OnInit {

  @Input() shortInfo!: string;
  @Input() title!: string;
  @Input() imgPath!: string;
  @Input() route!: string;
  @Input() active: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
