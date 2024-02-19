import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFooterLoginComponent } from './header-footer-login.component';
import { HeaderFooterLoginRoutingModule } from './header-footer-login-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from 'src/app/theme/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms'
import { DetailService } from 'src/app/theme/dashboard/detail/detail.service';
@NgModule({
  imports: [
    CommonModule,
    HeaderFooterLoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HeaderFooterLoginComponent],
  providers:[DetailService]
})
export class HeaderFooterLoginModule { }
