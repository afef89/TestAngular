import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MatButtonModule,
  ]

})
export class ProtectedModule { }
