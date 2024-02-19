import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PellWysiwygComponent} from './pell-wysiwyg.component';

const routes: Routes = [
  {
    path: '',
    component: PellWysiwygComponent,
    data: {
      title: 'Pell Wysiwyg Editor',
      icon: 'icon-edit',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - pell wysiwyg editor',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PellWysiwygRoutingModule { }
