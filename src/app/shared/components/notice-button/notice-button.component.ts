import { Component, OnInit } from '@angular/core';
import { INotice } from '../../interface/notice.interface';
import { NoticeFormComponent } from '../notice-form/notice-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notice-button',
  imports: [],
  templateUrl: './notice-button.component.html',
  styleUrl: './notice-button.component.css',
  standalone: true,
})
export class NoticeButtonComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(NoticeFormComponent, {
      width: '500px',
      data: { mode: 'add' },
    });

    dialogRef.afterClosed().subscribe();
  }
}
