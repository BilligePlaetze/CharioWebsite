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
  rnd1_lng = -71.9742687;
  rnd1_lat = -13.5300169;
  rnd2_lng = 112.4810752;
  rnd2_lat = 68.5056074;
  rnd3_lng = -77.0387185;
  rnd3_lat = 38.8976763;

  clickedMarker(label: string, index: number) {
    this.router.navigateByUrl('/charity?location=' + label);
  }
}
