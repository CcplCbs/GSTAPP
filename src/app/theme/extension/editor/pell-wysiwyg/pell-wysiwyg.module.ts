import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PellWysiwygRoutingModule } from './pell-wysiwyg-routing.module';
import { PellWysiwygComponent } from './pell-wysiwyg.component';
import { PellModule } from 'angular-pell';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PellWysiwygRoutingModule,
    SharedModule,
    PellModule
  ],
  declarations: [PellWysiwygComponent]
})
export class PellWysiwygModule { }
