import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.scss']
})
export class AdvertisementDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  private subManager = new Subscription();

  ngOnInit() {
    let sub = this.activatedRoute.queryParams.subscribe(params => {
      let id = params['id'];
      console.log(id);
    })

    this.subManager.add(sub);
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }
}