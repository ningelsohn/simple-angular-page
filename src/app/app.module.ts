import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

import { AppComponent } from './app.component';
import { CarouselSlideComponent } from './home/service-carousel/carousel-slide/carousel-slide.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';
import { Service1Component } from './services/service-1/service-1.component';
import { Service2Component } from './services/service-2/service-2.component';
import { Service3Component } from './services/service-3/service-3.component';
import { LegalNoticeComponent } from './legal/legal-notice/legal-notice.component';
import { TermsAndConditionsComponent } from './legal/terms-and-conditions/terms-and-conditions.component';
import { ServiceCarouselComponent } from './home/service-carousel/service-carousel.component';
import { ServiceTemplateComponent } from './services/service-template/service-template.component';
import { LegalComponent } from './legal/legal.component';
import { ServiceInsightTemplateComponent } from './home/service-insight/service-insight-template/service-insight-template.component';
import { Service3InsightComponent } from './home/service-insight/service-3-insight/service-3-insight.component';
import { Service2InsightComponent } from './home/service-insight/service-2-insight/service-2-insight.component';
import { Service1InsightComponent } from './home/service-insight/service-1-insight/service-1-insight.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: Service1Component },
  { path: 'skills', component: Service2Component },
  { path: 'hobbys', component: Service3Component },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    Service3Component,
    Service1Component,
    Service2Component,
    LegalNoticeComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    ServiceCarouselComponent,
    CarouselSlideComponent,
    ServiceTemplateComponent,
    LegalComponent,
    ServiceInsightTemplateComponent,
    Service3InsightComponent,
    Service2InsightComponent,
    Service1InsightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslocoRootModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
