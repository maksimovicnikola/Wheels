import { AdvertisementsService } from './../../services/advertisements/advertisements.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.scss']
})
export class AdvertisementDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private advertisementService: AdvertisementsService
  ) { }

  private subManager = new Subscription();

  ngOnInit() {
    // let sub = this.activatedRoute.queryParams.subscribe(params => {
    //   let id = params['id'];
    //   console.log(id);
    // })

    //getting advertisement id from url, later to change to get via activated route, not by split
    let url = this.router.url;
    let splitedUrl = url.split('/');
    let advertisementId = Number(splitedUrl[splitedUrl.length - 1]);


    this.advertisementService.getAdvertisementDetailsById(advertisementId)
      .subscribe(response => {
        console.log(response)
      }
      )
    // this.subManager.add(sub);
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }
}