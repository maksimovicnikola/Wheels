import { Component, OnInit, NgModule } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  private vehicleMakes: any;
  private selectedVehicleMake: number = -1;
  private vehicleModels: any;

  ngOnInit() {
    this.appService.getAllMakes()
    .subscribe(
        response =>
        {
          this.vehicleMakes = response;
        }
      )
  }

  setVehicleMake() {
    let selectedMake = this.selectedVehicleMake;

    this.appService.getModelsForMake(selectedMake)
    .subscribe(
      response =>
      {
        this.vehicleModels = response;
      }
    )
  }
}
