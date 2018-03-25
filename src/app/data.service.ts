import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {transaction} from './transaction';

const FEATURE_BASE_URL = 'http://192.168.170.144:8080/transaction';


@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getTransaction(donationCode: string): Observable<any> {
    const QUERY_URL = FEATURE_BASE_URL + '/search/findByTransactionIdDonationCode?donationCode=' + donationCode;
    return this.http.get(QUERY_URL)
      .map((res: Response) => res.json());
  }

  createTransaction(tr: transaction): Observable<transaction> {
    return this.http.post(FEATURE_BASE_URL, transaction)
      .map(res => res.json());
  }

  updateTransaction(tr: transaction): Observable<transaction> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(FEATURE_BASE_URL, tr, {
      headers: headers
    }).map((res: Response) => res.json());
  }

}


