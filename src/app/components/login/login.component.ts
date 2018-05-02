import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../../../models/login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  private isSignInError: boolean = false;

  ngOnInit() {
  }

  signin(form: LoginCredentials) {
    //get token
    this.auth.getToken(form)
      .subscribe(response => {
        //after getting of token, save it to local storage and login
        if (response) {
          let tokenData = response.json();
          this.auth.saveToken(tokenData);
          this.isSignInError = false;
          this.login(form);
        }
      },
        err => { this.isSignInError = true; }
      )
  }

  login(form: LoginCredentials) {
    this.auth.login(form)
      .subscribe((user: any) => {
        if (user._body != "null") {
          user = user.json();
          this.auth.saveUserToLocalStorage(user);

          this.router.navigate(['/']);
        }
        else {
          this.isSignInError = true;
        }
      },
        err => {
          this.isSignInError = true;
        });
  }
}
