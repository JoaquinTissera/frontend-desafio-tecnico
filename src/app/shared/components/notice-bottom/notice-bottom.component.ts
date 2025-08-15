import { Component, OnInit } from '@angular/core';
import { INotice } from '../../interface/notice.interface';
import { NoticeFormComponent } from '../notice-form/notice-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notice-bottom',
  imports: [],
  templateUrl: './notice-bottom.component.html',
  styleUrl: './notice-bottom.component.css',
  standalone: true,
})
export class NoticeBottomComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(NoticeFormComponent, {
      width: '500px',
      data: { mode: 'add' },
    });

    dialogRef.afterClosed().subscribe((result: INotice | null) => {
      if (result) {
        console.log('Noticia agregada/actualizada:', result);
        // Aquí podés emitir un EventEmitter para notificar al padre
      }
    });
  }
}
