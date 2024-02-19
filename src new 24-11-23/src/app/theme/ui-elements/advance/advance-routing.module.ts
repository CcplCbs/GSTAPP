import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Advance Components',
      status: false
    },
    children: [
      {
        path: 'task-board',
        loadChildren: () => import('./draggable-task-board/draggable-task-board.module').then(m => m.DraggableTaskBoardModule)
      },
      {
        path: 'grid-stack',
        loadChildren: () => import('./grid-stack/grid-stack.module').then(m => m.GridStackModule)
      },
      /*{
        path: 'light-box',
        loadChildren: () => import('./adv-light-box/adv-light-box.module').then(m => m.AdvLightBoxModule)
      },*/
      {
        path: 'modal',
        loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
      },
      /*{
        path: 'notify',
        loadChildren: './notify/notify.module#NotifyModule'
      },*/
      {
        path: 'rating',
        loadChildren: () => import('./rating/rating.module').then(m => m.RatingModule)
      },
      {
        path: 'range-slider',
        loadChildren: () => import('./range-slider/range-slider.module').then(m => m.RangeSliderModule)
      },
      /*{
        path: 'slider',
        loadChildren: () => import('./carousel/carousel.module').then(m => m.CarouselModule)
      },*/
      /*{
        path: 'tour',
        loadChildren: './adv-tour/adv-tour.module#AdvTourModule'
      },*/
      {
        path: 'tree',
        loadChildren: () => import('./adv-tree/adv-tree.module').then(m => m.AdvTreeModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceRoutingModule { }
