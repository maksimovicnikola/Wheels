import { Injectable } from '@angular/core';
import { Constants } from '../assets/constants/constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  private globalPath = Constants.GLOBAL_SERVER_PATH;
  private url: string = this.globalPath + "api/getallusers";

  sendRequestToServer() {
    return this.http.get(this.url);
  }

  getAllVehicles()
  {
    this.url = this.globalPath + "api/getallvehicles";
    return this.http.get(this.url);
  }
}
