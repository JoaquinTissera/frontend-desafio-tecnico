import { Component, Input, OnInit } from '@angular/core';
import { INotice } from '../../interface/notice.interface';
import { NoticeDialogComponent } from '../notice-dialog/notice-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notice-bottom',
  imports: [],
  templateUrl: './notice-bottom.component.html',
  styleUrl: './notice-bottom.component.css',
  standalone: true,
})
export class NoticeBottomComponent implements OnInit {
  @Input() mode: 'add' | 'edit' | 'delete' = 'add';
  @Input() notice: INotice | null = null;

  label: string = 'Agregar Noticia';
  labelModel = {
    add: 'Agregar Noticia',
    edit: 'Editar Notica',
    delete: 'Eliminar Notica',
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.label = this.labelModel[this.mode];
    console.log(this.notice);
  }

  openDialog() {
    const dialogRef = this.dialog.open(NoticeDialogComponent, {
      width: '500px',
      data: { notice: this.notice, mode: this.mode },
    });

    dialogRef.afterClosed().subscribe((result: INotice | null) => {
      if (result) {
        console.log('Noticia agregada/actualizada:', result);
        // Aquí podés emitir un EventEmitter para notificar al padre
      }
    });
  }
}
