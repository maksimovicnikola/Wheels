import { MappingService } from './../../mapping/mapping.service';
import { ApiService } from './../api/api.service';
import { LoginCredentials } from './../../../models/login-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private api: ApiService,
    private mapping: MappingService
  ) { }

  signin(credentials: LoginCredentials){
    var url = this.mapping.get_token;

    return this.api.tokenAuth(url, credentials);
  }

  saveToken(){

  }

}
