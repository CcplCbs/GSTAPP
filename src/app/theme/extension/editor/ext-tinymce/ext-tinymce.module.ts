import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtTinymceRoutingModule } from './ext-tinymce-routing.module';
import { ExtTinymceComponent } from './ext-tinymce.component';
import {TinymceModule} from 'angular2-tinymce';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ExtTinymceRoutingModule,
    SharedModule,
    TinymceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ExtTinymceComponent]
})
export class ExtTinymceModule { }
