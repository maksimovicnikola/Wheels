import { Advertisement } from './../../../models/advertisement';
import { AdvertisementsService } from './../../services/advertisements/advertisements.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Lightbox } from 'angular2-lightbox';

@Component({
  // tslint:disable-next-line:component-selector
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

    const id = this.activatedRoute.snapshot.params['id'];

    const advertisement = this.advertisementService.getAdvertisementDetailsById(id)
      .subscribe((response: Advertisement) => {
        this.advertisementDetails = response;

        const imagesPaths = response.Images;
        const description = response.Description;

        this.setLightBox(imagesPaths, description);

      }
      );

    this.subManager.add(advertisement);
  }

  // set lightbox images and icon paths and caption
  setLightBox(imagesPaths: Array<string>, description: string) {
    imagesPaths.forEach(img => {
      const absolutePath = img;
      let relativePath = absolutePath.split('src')[1];
      relativePath = '../../..' + relativePath;
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

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }
}
