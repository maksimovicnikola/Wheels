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

  getAllMakes()
  {
    this.url = this.globalPath + "api/getallvehiclemakes";

    return this.http.get(this.url);
  }

  getModelsForMake(idMake: number, idType: number)
  {
    this.url = this.globalPath + "api/getallmodelsformake/" + idMake + "/" + idType;

    return this.http.get(this.url);
  }

  geImage(id: number){
    this.url = this.globalPath + "api/getimage/" + id;

    return this.http.get(this.url);
  }
}
