import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Import contact information from env configuration
  mail: string = environment.email; //nice-to-know: naming this variable 'email' resulted in [object: object] being displayed, may caused by form-field named 'email'
  phone: string = environment.phone;
  mobile: string = environment.mobile;

  constructor() { }

  ngOnInit(): void { }
}
