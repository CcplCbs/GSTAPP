import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComposeComponent } from './email-compose.component';
import {EmailComposeRoutingModule} from './email-compose-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TinymceModule} from 'angular2-tinymce';

@NgModule({
  imports: [
    CommonModule,
    EmailComposeRoutingModule,
    SharedModule,
    TinymceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmailComposeComponent]
})
export class EmailComposeModule { }
