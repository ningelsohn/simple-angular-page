import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

    // Import contact information from env configuration
    email: string = environment.email;
    phone: string = environment.phone;
    mobile: string = environment.mobile;

  constructor() { }

  ngOnInit(): void {
  }

}
