import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoticeFormComponent } from '../notice-form/notice-form.component';
import { NoticeService } from '../../service/notice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-button-icon',
  standalone: true,
  templateUrl: './notice-button-icon.component.html',
  styleUrls: ['./notice-button-icon.component.css'],
})
export class NoticeButtonIcon {
  @Input() mode: 'edit' | 'delete' = 'edit';
  @Input() noticeId?: string;

  constructor(
    private dialog: MatDialog,
    private noticeService: NoticeService,
    private router: Router,
  ) {}

  /**
   * Maneja el click en el botón de icono
   * Determina la acción basada en el modo del botón
   */
  handleClick() {
    if (this.mode === 'edit' && this.noticeId) {
      this.openEditDialog();
    } else if (this.mode === 'delete' && this.noticeId) {
      this.deleteNotice();
    }
  }

  /**
   * Abre el dialog de edición de noticia
   * Pasa el ID de la noticia al formulario para cargar datos existentes
   */
  openEditDialog() {
    const dialogRef = this.dialog.open(NoticeFormComponent, {
      width: '500px',
      data: { mode: 'edit', noticeId: this.noticeId },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.returnList();
    });
  }

  /**
   * Elimina una noticia del servicio
   * Utiliza el ID de la noticia para identificarla
   */
  deleteNotice() {
    this.noticeService.deleteNotice(this.noticeId);
    this.returnList();
  }

  returnList() {
    this.router.navigate(['/']);
  }
}
