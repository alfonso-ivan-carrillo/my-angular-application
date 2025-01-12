import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FamilyPageComponent } from './family-page/family-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { PicturePageComponent } from './picture-page/picture-page.component'; 
import { StoicPageComponent } from './stoic-page/stoic-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'hero-page', component: HeroPageComponent },
  { path: 'family-page', component: FamilyPageComponent },
  { path: 'book-page', component: BookPageComponent },
  { path: 'fizz-buzz-page', component: FizzBuzzComponent},
  { path: 'picture-page', component: PicturePageComponent},
  { path: 'stoic-page', component: StoicPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
