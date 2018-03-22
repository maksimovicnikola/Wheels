import { MappingService } from './services/mapping/mapping.service';
import { HomepageService } from './services/homepage/homepage.service';
import { AdvertisementsService } from './services/advertisements/advertisements.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LightboxModule } from 'angular2-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    HomeComponent,
    AdvertisementDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    LightboxModule
  ],
  exports:[],
  providers: [AppService, 
    AdvertisementsService, 
    HomepageService, 
    MappingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
