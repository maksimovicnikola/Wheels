import { HttpClient } from '@angular/common/http';
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
    private mapping: MappingService,
    private http: HttpClient
  ) { }

  getLoggedUser() {
    const loggedUser = localStorage.getItem('UserInfo');

    const user = JSON.parse(loggedUser);

    return user;
  }

  getToken(credentials: LoginCredentials) {
    const url = this.mapping.get_token;

    return this.api.getToken(url, credentials);
  }

  login(form: LoginCredentials) {
    const url = this.mapping.post_login;

    const usr = new LoginCredentials();
    usr.Email = form.Email;
    usr.Password = form.Password;

    return this.api.postAuth(url, usr);
  }

  logout() {
    localStorage.clear();
  }

  saveToken(token: any) {
    localStorage.setItem('token', token.access_token);
  }

  saveUserToLocalStorage(user: UserLocalStorage) {
    const strUser = JSON.stringify(user);

    localStorage.setItem('UserInfo', strUser);
  }

  setUserActive(id: string) {
    const url = this.mapping.set_user_active.replace('{:id}', id);

    return this.http.get(url);
  }
}
