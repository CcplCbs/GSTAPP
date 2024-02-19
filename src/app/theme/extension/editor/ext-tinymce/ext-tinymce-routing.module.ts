import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExtTinymceComponent} from './ext-tinymce.component';

const routes: Routes = [
  {
    path: '',
    component: ExtTinymceComponent,
    data: {
      title: 'TinyMca Editor',
      icon: 'icon-edit',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tinymce editor',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtTinymceRoutingModule { }
