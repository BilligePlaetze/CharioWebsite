import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
// TODO import service + model class

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}
  location: string;
  title: string;
  title_niger = 'Welcome to the donation page of Niger';
  title_zkm = 'Welcome to the donation page of ZKM';

  sendPorn(link) {
    // TODO use service to post
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.location = params['location'];
      if (this.location === 'Niger') {
        this.title = this.title_niger;
      } else {
        this.title = this.title_zkm;
      }
    });
  }

}
