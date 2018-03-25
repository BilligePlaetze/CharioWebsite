import { Component, OnInit } from '@angular/core';
import {Params, Router} from '@angular/router';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }
  niger_lng = 11.5579;
  niger_lat = 18.0999;
  zkm_lng = 8.3812;
  zkm_lat = 49.0018;
  // muc_lng = 11.5888913;
  // muc_lat = 48.17311;
  goat_buyer_lng = 2.1254;
  goat_buyer_lat = 13.5116;

  title = 'Track your donation';
  image_location = 'assets/2.png';
  image_string = ''

  async ngOnInit() {

    while (1) {
      this.dataService.getTransaction('AGOATI').subscribe(
        penis => this.readTransactions(penis['_embedded']['transactions']),
        err => {
          console.log(err);
        });

      await this.delay(3000);
    }
  }

  private readTransactions(transactions: any) {
    const agentA = transactions[0].transactionId.agentId === 'AgentA' ? transactions[0] : transactions[1];
    const agentB = transactions[0].transactionId.agentId === 'AgentB' ? transactions[0] : transactions[1];
      console.log(agentA);
      console.log(agentB);
      if (agentA['photo']) {
        this.image_location = 'assets/3.png';
        this.image_string = agentA['photo'];
      }
      if (agentB['photo']) {
        this.title = "Your donation has arrived! :)";
        this.image_location = 'assets/4.png';
        this.image_string = agentB['photo'];
    }
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
