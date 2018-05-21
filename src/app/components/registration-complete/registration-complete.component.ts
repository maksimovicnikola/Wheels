import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-registration-complete',
  templateUrl: './registration-complete.component.html',
  styleUrls: ['./registration-complete.component.scss']
})
export class RegistrationCompleteComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService) { }

  public isActivated: number;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.auth.setUserActive(id).subscribe((response: number) => {
      this.isActivated = response;
    });
  }
}
