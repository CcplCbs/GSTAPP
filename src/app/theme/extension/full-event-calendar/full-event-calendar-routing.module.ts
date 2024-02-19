import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullEventCalendarComponent} from './full-event-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: FullEventCalendarComponent,
    data: {
      title: 'Full Event Calendar',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - event calendar',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullEventCalendarRoutingModule { }
