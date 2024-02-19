import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailsComponent } from './task-details.component';
import {SharedModule} from '../../../shared/shared.module';
import {TaskDetailsRoutingModule} from './task-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TaskDetailsRoutingModule,
    SharedModule
  ],
  declarations: [TaskDetailsComponent]
})
export class TaskDetailsModule { }
