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
  info: string;
  title_niger = 'Welcome to the donation page of Niger - powered by CARE';
  title_zkm = 'Welcome to the donation page of ZKM - powered by 1&1';
  info_zkm = 'Das ZKM | Zentrum für Kunst und Medien ist eine weltweit einzigartige Kulturinstitution, denn es ist ein Ort, der die originären Aufgaben des Museums erweitert. Es ist ein Haus aller Medien und Gattungen, ein Haus sowohl der raumbasierten Künste wie Malerei, Fotografie und Skulptur als auch der zeitbasierten Künste wie Film, Video, Medienkunst, Musik, Tanz, Theater und Performance. Als Museum wurde das ZKM 1989 gegründet mit der Mission, die klassischen Künste ins digitale Zeitalter fortzuschreiben.';
  info_niger = 'Obwohl das Land über große Uranreserven verfügt, gehören die Menschen im Niger zu den Ärmsten der Welt. Der Viehbestand und die Ernten werden häufig durch katastrophale Dürren zerstört, die Millionen in den Hunger treiben. Zehntausende von Kindern leben im Niger unter prekären soziökonomischen Bedingungen. SOS-Kinderdorf unterstützt diese notleidenden Kinder durch verschiedene Programme und Initiativen im ganzen Land. Die Republik Niger ist ein Binnenstaat in Westafrika. Derzeit beläuft sich die Gesamtbevölkerung des Niger auf 17,4 Millionen.';

  sendPorn(link) {
    // TODO use service to post
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.location = params['location'];
      if (this.location === 'Niger') {
        this.title = this.title_niger;
        this.info = this.info_niger;
      } else {
        this.title = this.title_zkm;
        this.info = this.info_zkm;
      }
    });
  }

}
