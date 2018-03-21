import { MappingService } from './../mapping/mapping.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../../assets/constants/constant';


@Injectable()
export class AdvertisementsService {

  constructor(
    private http: HttpClient,
    private mapping: MappingService
  ) { }
  
  getAllAdvertisements() 
  {
    let url: string = this.mapping.get_all_advertisements_api;

    return this.http.get(url);
  }

  getAdvertisementDetailsById(id: number)
  {
    let url = this.mapping.get_advertisement_by_id.replace('{id}', id.toString());

    return this.http.get(url);
  }

}
