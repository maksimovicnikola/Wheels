import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HomeComponent } from './home/home.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: 
    {
      breadcrumbs: 'Home'
    }
  },
  {
    path: '',
    component: VehicleComponent,
    data: 
    {
      breadcrumbs: 'Home'
    },
      children: [
        {
          path: 'vehicles',
          component: VehicleComponent,
          data: {
            breadcrumbs: 'Vehicles'
          },
          children:
            [
              { path: ':id', 
                component: VehicleComponent,
                data: {
                    breadcrumbs: true,
                    text: "Details"
                  }
              }
            ]
        }
      ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), McBreadcrumbsModule.forRoot()],
  exports: [RouterModule, McBreadcrumbsModule]
})

export class AppRoutingModule { }
