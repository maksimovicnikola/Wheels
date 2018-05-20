import { TypeVehicle } from './../../../models/type-vehicle';
import { MakeVehicle } from './../../../models/make-vehicle';
import { HomepageData } from './../../../models/homepage-data';
import { getTestBed } from '@angular/core/testing';
import { HomepageService } from './../../services/homepage/homepage.service';
import { Advertisement } from './../../../models/advertisement';
import { Component, OnInit, NgModule } from '@angular/core';
import { AppService } from '../../app.service';
import { Headers, Http, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { AdvertisementsService } from '../../services/advertisements/advertisements.service';
import { HomeAdvertisement } from '../../../models/home-advertisement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService,
    private adsService: AdvertisementsService,
    private homepageService: HomepageService,
    private http: Http,
    private sanitizer: DomSanitizer
  ) { }

  private vehicleTypes: TypeVehicle[];
  private vehicleMakes: MakeVehicle[];
  private vehicleModels: any = [];
  private selectedVehicleMake: number = -1;
  private selectedVehicleType: number = -1;
  private selectedVehicleModel: number = -1;
  private advertisements: HomeAdvertisement[] = [];
  private showImage: any;

  //this variable is used for ngSwitch between filter tabs
  private filterViewMode: string = 'basicFilter';

  ngOnInit() {
    this.homepageService.getHomepageData().subscribe((result: HomepageData) => {
      this.vehicleMakes = result.Makes;
      this.advertisements = result.Advertisements;
      this.vehicleTypes = result.Types;
    })
  }

  onChangeVehicleType() {
    if (this.vehicleModels.length > 0) {
      this.vehicleModels = [];
    }

    if (this.selectedVehicleMake != -1) {
      this.setVehicleMake();
    }

    this.setVehicleMake();
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

  //uploading multiple files to api
  fileChange(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      // let file: File = fileList[0];
      let formData: FormData = new FormData();

      for (let f = 0; f < fileList.length; f++) {
        formData.append(fileList[f].name, fileList[f], fileList[f].name);
      }

      let headers = new Headers();
      let options = new RequestOptions({ headers: headers });
      this.http.post("http://localhost:63605/api/uploadimage", formData, options)
        .subscribe(
          // data => { console.log(data), this.getImage(1); },
          error => console.log(error)
        ),
        err => (console.log("There is some error!"))
    }
  }

  //getting image as byte array and showing it
  // getImage(id: number) {
  //   this.appService.geImage(id)
  //     .subscribe(
  //       (response: Response) => {
  //         this.showImage = "data:image/png;base64," + response;
  //       }
  //     )
  // }

  filterAdvertisements() {
    let advertisements: HomeAdvertisement[] = this.advertisements;
    let filteredAdvertisements: Advertisement[] = [];

    let type = this.selectedVehicleType;
    let make = this.selectedVehicleMake;
    let model = this.selectedVehicleModel;

    this.homepageService.filterAdvertisements(type, make, model).subscribe((response: HomeAdvertisement[]) => {
      this.advertisements = response;
    })
  }

}
