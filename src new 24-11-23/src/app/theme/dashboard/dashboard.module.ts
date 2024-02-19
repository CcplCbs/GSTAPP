import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListModule } from './list/list.module';
import { ListRoutingModule } from './list/list-routing.module';
import { DetailModule } from './detail/detail.module';
import { DetailRoutingModule } from './detail/detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ListModule,
    ListRoutingModule,
    DetailModule,
    DetailRoutingModule
  ],
  declarations: []
})
export class DashboardModule { }
