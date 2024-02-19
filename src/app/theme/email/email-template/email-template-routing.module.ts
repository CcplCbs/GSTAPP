import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Email Template',
      status: false
    },
    children: [
      {
        path: 'email-welcome',
        loadChildren: () => import('./email-welcome/email-welcome.module').then(m => m.EmailWelcomeModule)
      },
      {
        path: 'email-reset-password',
        loadChildren: () => import('./email-reset-password/email-reset-password.module').then(m => m.EmailResetPasswordModule)
      },
      {
        path: 'email-newsletter',
        loadChildren: () => import('./email-newsletter/email-newsletter.module').then(m => m.EmailNewsletterModule)
      },
      {
        path: 'app-launch',
        loadChildren: () => import('./email-app-launch/email-app-launch.module').then(m => m.EmailAppLaunchModule)
      },
      {
        path: 'activation-code',
        loadChildren: () => import('./email-active-code/email-active-code.module').then(m => m.EmailActiveCodeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailTemplateRoutingModule { }
