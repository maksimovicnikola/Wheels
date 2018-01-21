import { TypeVehicle } from './../../models/type-vehicle';
import { MakeVehicle } from './../../models/make-vehicle';
import { HomepageData } from './../../models/homepage-data';
import { getTestBed } from '@angular/core/testing';
import { HomepageService } from './../services/homepage/homepage.service';
import { Advertisement } from './../../models/advertisement';
import { AdvertisementsService } from './../services/advertisements.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService,
    private adsService: AdvertisementsService,
    private homepageService: HomepageService
  ) { }

  private vehicleTypes: TypeVehicle[];
  private vehicleMakes: MakeVehicle[];
  private vehicleModels: any;  
  private selectedVehicleMake: number = -1;
  private selectedVehicleType: number = -1;
  private advertisements: Advertisement[] = [];

  ngOnInit() {
    this.homepageService.getHomepageData().subscribe((result: HomepageData) => {
      this.vehicleMakes = result.Makes;
      this.advertisements = result.Advertisements;
      this.vehicleTypes = result.Types;
    })
  }

  setVehicleMake() {
    let selectedMake = this.selectedVehicleMake;
    let selectedType = this.selectedVehicleType;

    this.appService.getModelsForMake(selectedMake, selectedType)
      .subscribe(
      response => {
        this.vehicleModels = response;
      }
      )
  }
}
