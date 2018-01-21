import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    private appService: AppService
  ){}

  ngOnInit(): void {
    // this.appService.sendRequestToServer().subscribe(response =>{
    //   console.log(response);
    // })
  }
}
