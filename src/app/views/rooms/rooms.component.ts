import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Rooms } from './interface';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  rooms: Rooms = {
    availableRooms: 10,
    bookedRooms: 15,
    totalRooms: 25,
  };

  changeCount: number = 0;

  @Input() inputString = '';

  @ViewChild('myDiv') mydiv!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('Called');
  }

  ngDoCheck(): void {
    this.changeCount++;
    console.log('counter ' + this.changeCount);
  }

  ngAfterContentInit() {
    console.log('called');
  }

  ngAfterViewInit() {
    console.log('Ng After view INit');
  }
}
