import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  constructor(private router: Router) { }
  niger_lng = 11.5579;
  niger_lat = 18.0999;
  zkm_lng = 8.3812;
  zkm_lat = 49.0018;


  clickedMarker(label: string, index: number) {
    this.router.navigateByUrl('/charity?location=' + label);
  }
}
