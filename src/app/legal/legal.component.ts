import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  // Import contact information from env configuration
  email: string = environment.email;
  phone: string = environment.phone;
  mobile: string = environment.mobile;

  constructor() { }

  ngOnInit(): void {
  }

}
