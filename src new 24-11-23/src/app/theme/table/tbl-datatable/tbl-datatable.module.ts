import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblDatatableRoutingModule } from './tbl-datatable-routing.module';
import { TblDatatableComponent } from './tbl-datatable.component';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import { TblSearchingComponent } from './tbl-searching/tbl-searching.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TblDatatableRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ],
  declarations: [TblDatatableComponent, TblSearchingComponent]
})
export class TblDatatableModule { }
