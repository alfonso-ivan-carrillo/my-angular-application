import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookPageComponent } from './book-page/book-page.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PonchitoComponent } from './ponchito/ponchito.component';
import { PonchoComponent } from './poncho/poncho.component';
import { AlfonsoComponent } from './alfonso/alfonso.component';
import { WhatShouldBeComponent } from './what-should-be/what-should-be.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FamilyPageComponent } from './family-page/family-page.component';
import { PicturePageComponent } from './picture-page/picture-page.component';
import { StoicPageComponent } from './stoic-page/stoic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookPageComponent,
    FizzBuzzComponent,
    HomepageComponent,
    PonchitoComponent,
    PonchoComponent,
    AlfonsoComponent,
    WhatShouldBeComponent,
    HeroPageComponent,
    FamilyPageComponent,
    PicturePageComponent,
    StoicPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
