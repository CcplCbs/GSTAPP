import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      status: false
    },
    children: [
      {
        path: 'default',
        loadChildren: () => import('./default/default.module').then(m => m.DefaultModule)
      },
      {
        path: 'ecommerce',
        loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
      },
      {
        path: 'crm-dashboard',
        loadChildren: () => import('./crm-dashboard/crm-dashboard.module').then(m => m.CrmDashboardModule)
      },
      {
        path: 'analytics',
        loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
      },
      {
        path: 'list/:id/:type',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
      },
      {
        path: 'detail/:id/:type/:ac_no',
        loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
      },
      {
        path: 'viewstatement/:id/:type/:ac_no',
        loadChildren: () => import('./viewstatement/viewstatement.module').then(m => m.ViewstatementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
