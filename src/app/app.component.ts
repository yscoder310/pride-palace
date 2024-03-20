import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RoomsComponent } from './views/rooms/rooms.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RoomsComponent,
    NavbarComponent,
    HomeComponent,
    RouterLink,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
