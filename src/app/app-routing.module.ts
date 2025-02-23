import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FamilyPageComponent } from './family-page/family-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { MyWorksheetComponent } from './my-worksheet/my-worksheet.component';
import { PicturePageComponent } from './picture-page/picture-page.component'; 
import { StoicPageComponent } from './stoic-page/stoic-page.component';
import { SuperHeroComponent } from './super-hero/super-hero.component';
import { EmitterPageComponent } from './emitter-page/emitter-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'hero-page', component: HeroPageComponent },
  { path: 'family-page', component: FamilyPageComponent },
  { path: 'book-page', component: BookPageComponent },
  { path: 'my-worksheet', component: MyWorksheetComponent},
  { path: 'picture-page', component: PicturePageComponent},
  { path: 'stoic-page', component: StoicPageComponent },
  { path: 'super-hero', component: SuperHeroComponent },
  { path: 'emitter-page', component: EmitterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
