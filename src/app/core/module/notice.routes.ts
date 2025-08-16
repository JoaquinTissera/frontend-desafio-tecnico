import { Routes } from '@angular/router';
import { NoticeComponent } from './notice/notice.component';
import { DetailNoticeComponent } from './detail-notice/detail-notice.component';

export default [
  {
    path: '',
    component: NoticeComponent,
  },
  {
    path: "detail/:id",
    component: DetailNoticeComponent,
  }
] as Routes;
