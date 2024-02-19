import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login/header-footer',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./theme/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'navigation',
        loadChildren: () => import('./theme/navigation/navigation.module').then(m => m.NavigationModule)
      },
      {
        path: 'widget',
        loadChildren: () => import('./theme/widget/widget.module').then(m => m.WidgetModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./theme/ui-elements/basic/basic.module').then(m => m.BasicModule)
      },
      {
        path: 'advance',
        loadChildren: () => import('./theme/ui-elements/advance/advance.module').then(m => m.AdvanceModule)
      },
      /*{
        path: 'animations',
        loadChildren: () => import('./theme/ui-elements/animation/animation.module').then(m => m.AnimationModule)
      },*/
      {
        path: 'forms',
        loadChildren: () => import('./theme/forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'bootstrap-table',
        loadChildren: () => import('./theme/table/bootstrap-table/bootstrap-table.module').then(m => m.BootstrapTableModule)
      },
      {
        path: 'data-table',
        loadChildren: () => import('./theme/table/tbl-datatable/tbl-datatable.module').then(m => m.TblDatatableModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./theme/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'email',
        loadChildren: () => import('./theme/email/email.module').then(m => m.EmailModule)
      },
      {
        path: 'crm-contact',
        loadChildren: () => import('./theme/crm-contact/crm-contact.module').then(m => m.CrmContactModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./theme/task/task.module').then(m => m.TaskModule)
      },
      {
        path: 'editor',
        loadChildren: () => import('./theme/extension/editor/editor.module').then(m => m.EditorModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./theme/extension/invoice/invoice.module').then(m => m.InvoiceModule)
      },
      {
        path: 'file-upload-ui',
        loadChildren: () => import('./theme/extension/file-upload-ui/file-upload-ui.module').then(m => m.FileUploadUiModule)
      },
      {
        path: 'full-event-calendar',
        loadChildren: () => import('./theme/extension/full-event-calendar/full-event-calendar.module').then(m => m.FullEventCalendarModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./theme/chart/chart.module').then(m => m.ChartModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./theme/map/map.module').then(m => m.MapModule)
      },
      {
        path: 'simple-page',
        loadChildren: () => import('./theme/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./theme/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'maintenance/error',
        loadChildren: () => import('./theme/maintenance/error/error.module').then(m => m.ErrorModule)
      },
      {
        path: 'maintenance/coming-soon',
        loadChildren: () => import('./theme/maintenance/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)
      },
      {
        path: 'email/email-template',
        loadChildren: () => import('./theme/email/email-template/email-template.module').then(m => m.EmailTemplateModule)
      },
      {
        path: 'maintenance/offline-ui',
        loadChildren: () => import('./theme/maintenance/offline-ui/offline-ui.module').then(m => m.OfflineUiModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
