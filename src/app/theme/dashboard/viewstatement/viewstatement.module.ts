import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewstatementRoutingModule } from './viewstatement-routing.module';
import { ViewstatementComponent } from './viewstatement.component';
import { SharedModule } from '../../../shared/shared.module';
import {IframeModule} from '../iframe/iframe.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ViewstatementComponent],
  imports: [
    CommonModule,
    ViewstatementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IframeModule,
    DataTablesModule
  ]
})
export class ViewstatementModule { }
