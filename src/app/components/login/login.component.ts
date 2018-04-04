import { UserService } from './../../services/user/user.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../../../models/login-model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private userService: UserService
  ) { }

  private isSignInError: boolean = false;

  ngOnInit() {
  }

  signin(form: LoginCredentials) {
    this.auth.signin(form)
      .subscribe(response => {
        if (response){
            let tokenData = response.json();
            localStorage.setItem('token', tokenData.access_token);
            this.isSignInError = false;
            this.getUserDataByEmail(form.Email);
        }
      },
        err => { this.isSignInError = true; }
      )
  }

  getUserDataByEmail(email: string){
    this.userService.getUserDataByEmail(email)
        .subscribe(user => {console.log(user.json())});
  }
}
