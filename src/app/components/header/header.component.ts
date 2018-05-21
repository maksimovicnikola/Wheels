import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  user = this.auth.getLoggedUser();

  setEnglish() {
    this.translate.use('en');
  }

  setSerbian() {
    this.translate.use('sr');
  }

  logout() {
    this.auth.logout();
  }
}
