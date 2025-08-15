import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { INotice } from '../../interface/notice.interface';
import { v4 as uuidv4 } from 'uuid';
import { NoticeService } from '../../service/notice.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notice-form',
  imports: [ReactiveFormsModule],
  templateUrl: './notice-form.component.html',
  styleUrl: './notice-form.component.css',
  standalone: true,
})
export class NoticeFormComponent {
  noticeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private noticeService: NoticeService,
    private dialogRef: MatDialogRef<NoticeFormComponent>,
  ) {
    this.noticeForm = this.fb.group({
      link: [''],
      creator: [''],
      title: [''],
      description: [''],
      image_url: [''],
    });
  }

  onSubmit() {
    if (this.noticeForm.valid) {
      const newNotice: INotice = {
        article_id: uuidv4(), // Genera ID único
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

  onCancel() {
    this.dialogRef.close();
  }
}
