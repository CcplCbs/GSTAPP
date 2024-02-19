import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TblDatatableComponent} from './tbl-datatable.component';

const routes: Routes = [
  {
    path: '',
    component: TblDatatableComponent,
    data: {
      title: 'Datatable',
      icon: 'icon-widgetized',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - datatable',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblDatatableRoutingModule { }
