import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {

  constructor(private router: Router) { }
  niger_lng = 11.5579;
  niger_lat = 18.0999;
  zkm_lng = 8.3812;
  zkm_lat = 49.0018;
  //muc_lng = 11.5888913;
  //muc_lat = 48.17311;
  goat_buyer_lng = 2.1254;
  goat_buyer_lat = 13.5116;

  
}
