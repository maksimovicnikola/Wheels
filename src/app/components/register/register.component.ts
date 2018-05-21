import { MappingService } from './../../mapping/mapping.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from './../../../models/registration-model';
import { FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private map: MappingService
  ) { }

  public model: RegistrationModel = new RegistrationModel();

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    repeatPassword: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }

  // static spaceNotAllowed(control: AbstractControl): ValidationErrors | null {
  //   if ((control.value as string) != undefined && (control.value as string).indexOf(' ') > -1) {
  //     return { passwordEqualWithRepeatPassword: true }
  //   }

  //   return null;
  // }

  register() {
    console.log(this.map.get_register, this.model);
    this.http.post(this.map.get_register, this.model).subscribe(x => {
      console.log(x);
    });
  }

  // getters for form elements
  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get repeatPassword() {
    return this.form.get('repeatPassword');
  }
}
