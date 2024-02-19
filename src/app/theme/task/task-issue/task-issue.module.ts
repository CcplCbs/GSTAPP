import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskIssueComponent } from './task-issue.component';
import {TaskIssueRoutingModule} from './task-issue-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    TaskIssueRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TaskIssueComponent]
})
export class TaskIssueModule { }
