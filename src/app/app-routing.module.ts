import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },  
  { path: 'vehicles', component: VehicleComponent },
  { path: 'vehicles/:id', component: VehicleComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
