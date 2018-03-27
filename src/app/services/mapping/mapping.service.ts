import { Constants } from './../../../assets/constants/constant';
import { Injectable } from '@angular/core';

@Injectable()
export class MappingService {

  constructor() { }

  public homepage_data_api: string = Constants.GLOBAL_SERVER_PATH + "/api/gethomepagedata";
  public filter_advertisements_api: string = Constants.GLOBAL_SERVER_PATH + "/api/filteradvertisements/{typeId}/{makeId}/{modelId}";
  public get_all_advertisements_api: string = Constants.GLOBAL_SERVER_PATH + "/api/getalladvertisements";
  public get_advertisement_by_id: string = Constants.GLOBAL_SERVER_PATH + "/api/getadvertisementbyid/{id}";
  public get_all_users_api: string = Constants.GLOBAL_SERVER_PATH + "/api/getallusers";
  public get_all_vehicles_api: string = Constants.GLOBAL_SERVER_PATH + "/api/getallvehicles";
  public get_all_makes_api: string = Constants.GLOBAL_SERVER_PATH + "/api/getallvehiclemakes";
  public get_models_for_make: string = Constants.GLOBAL_SERVER_PATH + "/api/getallmodelsformake/{idMake}/{idType}";
}
