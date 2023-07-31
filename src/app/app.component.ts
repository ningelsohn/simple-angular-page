import { Component } from '@angular/core';
import { TranslocoService, getBrowserLang } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'worksample';

  constructor(public translateService: TranslocoService) { }

  ngOnInit(): void {

    // get browser language
    let lang: string | undefined = getBrowserLang();

    // if undefined, override with default lang
    lang ??= this.translateService.getDefaultLang();
    
    // set language
    this.translateService.setActiveLang(lang);
  }

}
