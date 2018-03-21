import { Constants } from './constant';
export class ApiRoutes{
    public homepage_data_api: string = Constants.GLOBAL_SERVER_PATH + "/api/gethomepagedata";
    
    public filter_advertisements_api: string = Constants.GLOBAL_SERVER_PATH + "api/filteradvertisements/{typeId}/{makeId}/{modelId}";
}