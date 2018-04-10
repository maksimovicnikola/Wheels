import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../../../models/login-model';

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }

  // getAuth(url: string){
  //   let token = localStorage.getItem('token');

  //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   headers.append('Authorization', 'Bearer ' + token);

  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.get(url, options);
  // }

  tokenAuth(url: string, data?: LoginCredentials){

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let options = new RequestOptions({ headers: headers });

    var body = "grant_type=password&username="+ data.Email + 
               "&password=" + data.Password; 

    return this.http.post(url, body, options);
  }


  //getting data via post, sending token to get data
  postAuth(url: string, body: LoginCredentials){
    let token = localStorage.getItem('token');

    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, body, options);
  }

}
