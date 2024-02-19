import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvLightBoxComponent } from './adv-light-box.component';
import { AdvLightBoxRoutingModule } from './adv-light-box-routing.module';
import { LightboxModule } from 'ngx-lightbox';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdvLightBoxRoutingModule,
    SharedModule,
    LightboxModule
  ],
  declarations: [AdvLightBoxComponent]
})
export class AdvLightBoxModule { }
