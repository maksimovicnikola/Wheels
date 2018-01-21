import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../assets/constants/constant';


@Injectable()
export class AdvertisementsService {

  constructor(
    private http: HttpClient
  ) { }

  private globalPath = Constants.GLOBAL_SERVER_PATH;
  
  getAllAdvertisements() 
  {
    let url: string = this.globalPath + "api/getalladvertisements";

    return this.http.get(url);
  }

}
