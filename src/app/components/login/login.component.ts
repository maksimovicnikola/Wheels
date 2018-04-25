import { UserService } from './../../services/user/user.service';
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
    private userService: UserService,
    private router: Router
  ) { }

  private isSignInError: boolean = false;

  ngOnInit() {
  }

  signin(form: LoginCredentials) {
    this.auth.signin(form)
      .subscribe(response => {
        if (response){
            let tokenData = response.json();
            this.auth.saveToken(tokenData);
            this.isSignInError = false;
            this.getUserDataByEmail(form.Email);
        }
      },
        err => { this.isSignInError = true; }
      )
  }

  getUserDataByEmail(email: string){
    this.userService.getUserDataByEmail(email)
        .subscribe((user: any) =>
          {
            user = user.json();
            this.auth.saveUserToLocalStorage(user);

            this.router.navigate(['/']);
        } );
  }
}
