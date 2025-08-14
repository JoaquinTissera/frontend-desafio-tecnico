import { Component, OnInit } from '@angular/core';
import { INotice } from '../../../shared/interface/notice.interface';
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { NoticeService } from '../../../shared/service/notice.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [CommonModule, SidebarComponent, SpinnerComponent],
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent implements OnInit {
  listNotice: INotice[] = [];
  notice: INotice | null = null;
  isLoading: boolean = false

  constructor(private noticeService: NoticeService) {}

  ngOnInit(): void {
    this.loadNotices();
  }

  loadNotices(query: string = 'apple', language: string = 'en'): void {
    this.isLoading = true;
    this.noticeService
      .getLatestNotice(query, language)
      .pipe(
        catchError((err) => {
          console.error('Error cargando noticias', err);
          return of([]);
          this.isLoading = false
        }),
      )
      .subscribe((notices: INotice[]) => {
        this.listNotice = notices;
        this.notice = notices[0] || null;
        this.isLoading = false
      });
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'img/censure.jpg'; // imagen alternativa desde carpeta pública
  }

  getNoticesBySideBar(): INotice[] {
    return this.listNotice.slice(-3);
  }
}
