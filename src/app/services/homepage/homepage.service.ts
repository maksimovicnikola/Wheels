import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../../assets/constants/constant';

@Injectable()
export class HomepageService {

  constructor(
    private http: HttpClient
  ) { }

  private globalPath = Constants.GLOBAL_SERVER_PATH;

  url: string;

  getHomepageData(){
    this.url = this.globalPath + "/api/gethomepagedata";

    return this.http.get(this.url);
  }
}
