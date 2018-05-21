import { ApiService } from './../api/api.service';
import { MappingService } from './../../mapping/mapping.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../../assets/constants/constant';


@Injectable()
export class AdvertisementsService {

  constructor(
    private http: HttpClient,
    private mapping: MappingService,
    private api: ApiService
  ) { }

  getAllAdvertisements() {
    const url: string = this.mapping.get_all_advertisements_api;

    return this.http.get(url);
  }

  getAdvertisementDetailsById(id: number) {
    const url = this.mapping.get_advertisement_by_id.replace('{id}', id.toString());

    return this.api.getAuth(url);
  }

}
