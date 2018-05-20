import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
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
    let id = this.route.snapshot.paramMap.get('id');

    this.auth.setUserActive(id).subscribe((response: number) => {
      this.isActivated = response;
    })
  }
}
