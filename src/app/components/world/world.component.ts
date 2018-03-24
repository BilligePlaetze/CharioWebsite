import { Component } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  constructor() { }
  title = 'hallo2';
  lng = 7.809007;
  lat = 51.678418;
}
