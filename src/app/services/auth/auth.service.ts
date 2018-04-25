import { MappingService } from './../../mapping/mapping.service';
import { ApiService } from './../api/api.service';
import { LoginCredentials } from './../../../models/login-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserLocalStorage } from '../../../models/user-local-storage';

@Injectable()
export class AuthService {

  constructor(
    private api: ApiService,
    private mapping: MappingService
  ) { }

  getLoggedUser() {
    let loggedUser = localStorage.getItem('UserInfo');

    let user = JSON.parse(loggedUser);

    return user;
  }

  signin(credentials: LoginCredentials) {
    var url = this.mapping.get_token;

    return this.api.tokenAuth(url, credentials);
  }

  logout() {
    localStorage.clear();
  }

  saveToken(token: any) {
    localStorage.setItem('token', token.access_token);
  }

  saveUserToLocalStorage(user: UserLocalStorage) {
    let strUser = JSON.stringify(user);

    localStorage.setItem('UserInfo', strUser);
  }

}
