import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../../assets/constants/constant';
import { ApiRoutes } from '../../../assets/constants/api-routes';

@Injectable()
export class HomepageService {

  constructor(
    private http: HttpClient,
    private routes: ApiRoutes    
  ) { }

  getHomepageData(){
    let url = this.routes.homepage_data_api;

    return this.http.get(url);
  }

  filterAdvertisements(TypeId: number, MakeId: number, ModelId: number){
    let url = this.routes.filter_advertisements_api;

    url = url.replace("{typeId}", TypeId.toString())
       .replace("{makeId}", MakeId.toString())
       .replace("{modelId}", ModelId.toString());

    return this.http.get(url);
  }
}
