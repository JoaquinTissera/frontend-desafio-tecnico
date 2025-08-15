import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoticeFormComponent } from '../notice-form/notice-form.component';
import { NoticeService } from '../../service/notice.service';

@Component({
  selector: 'app-notice-button-icon',
  standalone: true,
  templateUrl: './notice-button-icon.component.html',
  styleUrls: ['./notice-button-icon.component.css'],
})
export class NoticeButtonIcon {
  @Input() mode: 'edit' | 'delete' = 'edit'; // 'edit' o 'delete'
  @Input() noticeId?: string; // Necesario para el borrado

  constructor(
    private dialog: MatDialog,
    private noticeService: NoticeService,
  ) {}

  handleClick() {
    if (this.mode === 'edit') {
      this.openEditDialog(this.noticeId);
    } else if (this.mode === 'delete' && this.noticeId) {
      this.deleteNotice();
    }
  }

  openEditDialog(noticeId: string | undefined) {
    const dialogRef = this.dialog.open(NoticeFormComponent, {
      width: '500px',
      data: { mode: 'edit', noticeId },
    });

    dialogRef.afterClosed().subscribe();
  }

  deleteNotice() {
    this.noticeService.deleteNotice(this.noticeId);
  }
}
