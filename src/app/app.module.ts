import { HomepageService } from './services/homepage/homepage.service';
import { AdvertisementsService } from './services/advertisements.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule, Http } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[],
  providers: [AppService, AdvertisementsService, HomepageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
