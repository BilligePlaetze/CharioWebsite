import { Component, OnInit } from '@angular/core';
// TODO import service + model class

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {

  constructor(/*TODO varname: Service*/) { }
  test: any

  sendPorn(link) {
    // TODO use service to post
  }

  ngOnInit() {
  }

}
