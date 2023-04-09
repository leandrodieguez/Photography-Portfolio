import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { WorksComponent } from './component/works/works.component';
import { Section1Component } from './component/section1/section1.component';
import { Section2Component } from './component/section2/section2.component';
import { Section3Component } from './component/section3/section3.component';
import { Section4Component } from './component/section4/section4.component';
import { Section5Component } from './component/section5/section5.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorksComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
