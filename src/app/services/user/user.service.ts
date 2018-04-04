import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../../../models/login-model';
import { MappingService } from '../../mapping/mapping.service';

@Injectable()
export class UserService {

  constructor(
    private mapping: MappingService,
    private api: ApiService
  ) { }

  getUserDataByEmail(email: string){
    let url = this.mapping.post_user_by_email;
    
    let usr = new LoginCredentials();
    usr.Email = email;

    return this.api.postAuthData(url, usr)    
  }

}
