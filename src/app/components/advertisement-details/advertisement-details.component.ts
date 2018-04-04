import { Advertisement } from './../../../models/advertisement';
import { AdvertisementsService } from './../../services/advertisements/advertisements.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.scss']
})
export class AdvertisementDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private advertisementService: AdvertisementsService,
    private _lightbox: Lightbox
  ) {
  }

  private subManager = new Subscription();
  private advertisementDetails: Advertisement = new Advertisement();

  private images: Array<any> = [];

  ngOnInit() {

    let id = this.activatedRoute.url.subscribe(x => {console.log(x)})

    //getting advertisement id from url, later to change to get via activated route, not by split
    let url = this.router.url;
    let splitedUrl = url.split('/');
    let advertisementId = Number(splitedUrl[splitedUrl.length - 1]);


    let advertisement = this.advertisementService.getAdvertisementDetailsById(advertisementId)
      .subscribe((response: Advertisement) => {
        this.advertisementDetails = response;

        let imagesPaths = response.Images;
        let description = response.Description;

        this.setLightBox(imagesPaths, description);

        response.VehicleTypeName
      }
      )

    this.subManager.add(advertisement);
  }

  //set lightbox images and icon paths and caption
  setLightBox(imagesPaths: Array<string>, description: string) {
    imagesPaths.forEach(img => {
      let absolutePath = img;
      let relativePath = absolutePath.split('src')[1];
      relativePath = "../../.." + relativePath;
      const src = relativePath;
      const caption = description;
      const thumb = relativePath;

      const album = {
        src: thumb,
        caption: caption,
        thumb: thumb
      };

      this.images.push(album);
    });

    this.images.shift();
  }

  // open lightbox onclick
  openLightbox(index: number): void {
    this._lightbox.open(this.images, index);
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }
}