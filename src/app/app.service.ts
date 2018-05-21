import { Injectable } from '@angular/core';
import { Constants } from '../assets/constants/constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MappingService } from './mapping/mapping.service';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient,
    private mapping: MappingService
  ) { }

  sendRequestToServer() {
    const url = this.mapping.get_all_users_api;

    return this.http.get(url);
  }

  getAllVehicles() {
    const url = this.mapping.get_all_vehicles_api;

    return this.http.get(url);
  }

  getAllMakes() {
    const url = this.mapping.get_all_makes_api;

    return this.http.get(url);
  }

  getModelsForMake(idMake: number, idType: number) {
    const url = this.mapping.get_models_for_make
      .replace('{idMake}', idMake.toString())
      .replace('{idType}', idType.toString());

    return this.http.get(url);
  }
}
