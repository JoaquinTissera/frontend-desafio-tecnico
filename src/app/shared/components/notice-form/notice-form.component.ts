import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { INotice } from '../../interface/notice.interface';
import { v4 as uuidv4 } from 'uuid';
import { NoticeService } from '../../service/notice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notice-form',
  imports: [ReactiveFormsModule],
  templateUrl: './notice-form.component.html',
  styleUrl: './notice-form.component.css',
  standalone: true,
})
export class NoticeFormComponent implements OnInit {
  noticeForm: FormGroup;
  mode: 'add' | 'edit' = 'add';
  noticeId?: string;

  constructor(
    private fb: FormBuilder,
    private noticeService: NoticeService,
    private dialogRef: MatDialogRef<NoticeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit'; noticeId?: string },
  ) {
    this.mode = data.mode;
    this.noticeId = data.noticeId; 

    // Inicializa el formulario reactivo con campos vacíos
    this.noticeForm = this.fb.group({
      link: [''], // URL de la noticia
      creator: [''], // Autor de la noticia
      title: [''], // Título de la noticia
      description: [''], // Descripción de la noticia
      image_url: [''], // URL de la imagen
    });
  }

  /**
   * Método del ciclo de vida que se ejecuta al inicializar el componente
   * Si está en modo edit, carga los datos de la noticia existente
   */
  ngOnInit(): void {
    if (this.noticeId) {
      const notice = this.noticeService.getNoticeById(this.noticeId);
      if (notice) {
        this.noticeForm.patchValue(notice);
      }
    }
  }

  /**
   * Maneja el click en el botón de guardar
   * Determina si debe crear una nueva noticia o editar una existente
   */
  handleClick() {
    if (this.mode === 'edit' && this.noticeId) {
      this.editNotice();
    } else if (this.mode === 'add') {
      this.addNotice();
    }
  }

  /**
   * Edita una noticia existente
   * Valida el formulario y actualiza la noticia en el servicio
   */
  private editNotice() {
    if (this.noticeForm.valid && this.noticeId) {
      const updatedNotice: INotice = {
        article_id: this.noticeId,
        title: this.noticeForm.value.title,
        link: this.noticeForm.value.link,
        description: this.noticeForm.value.description,
        pubDate: new Date().toISOString(),
        image_url: this.noticeForm.value.image_url || '',
        creator: this.noticeForm.value.creator ? [this.noticeForm.value.creator] : null,
      };

      this.noticeService.updateNotice(updatedNotice);
      this.dialogRef.close();
    }
  }

  /**
   * Crea una nueva noticia
   * Valida el formulario y agrega la noticia al servicio
   */
  private addNotice() {
    if (this.noticeForm.valid) {
      const newNotice: INotice = {
        article_id: uuidv4(),
        title: this.noticeForm.value.title,
        link: this.noticeForm.value.link,
        description: this.noticeForm.value.description,
        pubDate: new Date().toISOString(),
        image_url: this.noticeForm.value.image_url || '',
        creator: this.noticeForm.value.creator ? [this.noticeForm.value.creator] : null,
      };

      this.noticeService.addNotice(newNotice);
      this.dialogRef.close();
    }
  }

  /**
   * Cancela la operación y cierra el dialog
   * No guarda cambios
   */
  onCancel() {
    this.dialogRef.close();
  }
}
