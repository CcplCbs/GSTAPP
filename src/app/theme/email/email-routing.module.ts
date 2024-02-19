import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Email',
      status: false
    },
    children: [
      {
        path: 'email-compose',
        loadChildren: () => import('./email-compose/email-compose.module').then(m => m.EmailComposeModule)
      },
      {
        path: 'email-inbox',
        loadChildren: () => import('./email-inbox/email-inbox.module').then(m => m.EmailInboxModule)
      },
      {
        path: 'email-read',
        loadChildren: () => import('./email-read/email-read.module').then(m => m.EmailReadModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
