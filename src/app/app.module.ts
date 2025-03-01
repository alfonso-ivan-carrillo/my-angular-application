import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookPageComponent } from './book-page/book-page.component';
import { MyWorksheetComponent } from './my-worksheet/my-worksheet.component';
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
import { RandomBookModalComponent } from './random-book-modal/random-book-modal.component';
import { AlphaNumeric } from './directives/alpha-numeric.directive';
import { UppercaseOnly } from './directives/uppercase-only.directive';
import { SuperHeroComponent } from './super-hero/super-hero.component';
import { AlphaOnlyDirective } from './directives/alpha-only.directive';
import { NumberOnlyDirective } from './directives/numeric-only.directive';
import { OffCanvasComponent} from './off-canvas/off-canvas.component';
import { EmitterPageComponent } from './emitter-page/emitter-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookPageComponent,
    MyWorksheetComponent,
    HomepageComponent,
    PonchitoComponent,
    PonchoComponent,
    AlfonsoComponent,
    WhatShouldBeComponent,
    HeroPageComponent,
    FamilyPageComponent,
    PicturePageComponent,
    StoicPageComponent,
    RandomBookModalComponent,
    SuperHeroComponent,
    OffCanvasComponent,
    EmitterPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AlphaNumeric,
    UppercaseOnly,
    AlphaOnlyDirective,
    NumberOnlyDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
