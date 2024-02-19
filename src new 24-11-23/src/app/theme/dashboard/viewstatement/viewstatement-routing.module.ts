import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewstatementComponent } from './viewstatement.component';

const routes: Routes = [
  {
    path: '',
    component: ViewstatementComponent,
    data: {
      title: 'View Statement',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewstatementRoutingModule { }
