import { MappingService } from './../mapping/mapping.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../../assets/constants/constant';

@Injectable()
export class HomepageService {

  constructor(
    private http: HttpClient,
    private mapping: MappingService    
  ) { }

  getHomepageData(){
    let url = this.mapping.homepage_data_api;

    return this.http.get(url);
  }

  filterAdvertisements(TypeId: number, MakeId: number, ModelId: number){
    let url = this.mapping.filter_advertisements_api;

    url = url.replace("{typeId}", TypeId.toString())
       .replace("{makeId}", MakeId.toString())
       .replace("{modelId}", ModelId.toString());

    return this.http.get(url);
  }
}
