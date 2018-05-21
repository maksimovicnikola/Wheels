import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../../../models/login-model';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  // getAuth(url: string){
  //   let token = localStorage.getItem('token');

  //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   headers.append('Authorization', 'Bearer ' + token);

  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.get(url, options);
  // }

  getToken(url: string, data?: LoginCredentials) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const body = 'grant_type=password&username=' + data.Email + '&password=' + data.Password;

    return this.http.post(url, body, { headers: headers });
  }


  // getting data via post, sending token to get data
  postAuth(url: string, body: LoginCredentials) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + token);


    return this.http.post(url, body, { headers: headers });
  }

}
