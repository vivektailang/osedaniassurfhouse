import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { RoomsComponent } from './components/rooms/rooms';
import { ActivitiesComponent } from './components/activities/activities';
import { GalleryComponent } from './components/gallery/gallery';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    RoomsComponent,
    ActivitiesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
