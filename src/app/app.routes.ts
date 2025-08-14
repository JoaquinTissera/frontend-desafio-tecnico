import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./core/module/notice/notice.routes'),
      },
    ],
  },
];
