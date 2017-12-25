import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';

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
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
