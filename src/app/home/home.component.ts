import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Import contact information from env configuration
  mail: string = environment.email; //nice-to-know: naming this variable 'email' resulted in [object: object] being displayed, may caused by form-field named 'email'
  phone: string = environment.phone;
  mobile: string = environment.mobile;

  constructor() { }

  ngOnInit(): void {}

  copyMail(): void {

     // Copy the text inside the text field
    navigator.clipboard.writeText(this.mail);
  }

}
