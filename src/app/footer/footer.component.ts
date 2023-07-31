import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Import contact information from env configuration
  email: string = environment.email;
  phone: string = environment.phone;
  mobile: string = environment.mobile;

  constructor() { }

  ngOnInit(): void {
  }

}
