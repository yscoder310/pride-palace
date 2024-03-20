import { Routes } from '@angular/router';
import { RoomsComponent } from './views/rooms/rooms.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
];
