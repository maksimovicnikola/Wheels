import { HeaderComponent } from './../header/header.component';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginCredentials } from '../../../models/login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  private isSignInError = false;

  // on this way we can call some method or get property value from HeaderComponent
  @ViewChild(HeaderComponent)
  private headerComponent: HeaderComponent;

  signin(form: LoginCredentials) {
    // get token
    this.auth.getToken(form)
      .subscribe(response => {
        // after getting of token, save it to local storage and login
        if (response) {
          const tokenData = response;
          this.auth.saveToken(tokenData);
          this.isSignInError = false;
          this.login(form);
        }
      },
        err => { this.isSignInError = true; }
      );
  }

  login(form: LoginCredentials) {
    this.auth.login(form)
      .subscribe((user: any) => {
        if (user._body !== 'null') {
          this.auth.saveUserToLocalStorage(user);

          // after login, updating user value in header component
          this.headerComponent.user = user;

          this.router.navigate(['/']);
        }
        // tslint:disable-next-line:one-line
        else {
          this.isSignInError = true;
        }
      },
        err => {
          this.isSignInError = true;
        });
  }
}
