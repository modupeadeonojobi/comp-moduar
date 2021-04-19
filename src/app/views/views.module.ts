import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ViewHomeComponent } from './view-home/view-home.component';


@NgModule({
  declarations: [StatisticsComponent, ViewHomeComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
