import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../../app.service';

@Component({
  selector: '',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  private vehicles: any;
  
  ngOnInit() {
    // on this way we can get ids or values from params in url
    // const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
  }

  //returns one step back in navigation
  goBack(): void {
    this.location.back();
  }

  getAllVehicles() {
    this.appService.getAllVehicles().subscribe((response: any) => {
      this.vehicles = response;
    })
  }

}
