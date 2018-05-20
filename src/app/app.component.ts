import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private appService: AppService,
    private translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('sr');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('sr');
  }

  ngOnInit(): void {
  }
}
