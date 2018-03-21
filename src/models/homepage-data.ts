import { TypeVehicle } from './type-vehicle';
import { Advertisement } from './advertisement';
import { MakeVehicle } from './make-vehicle';
import { HomeAdvertisement } from './home-advertisement';

export class HomepageData {
    public Types: TypeVehicle[];
    public Makes: MakeVehicle[];
    public Advertisements: HomeAdvertisement[];
}