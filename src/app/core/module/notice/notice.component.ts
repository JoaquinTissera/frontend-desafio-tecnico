import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { INotice } from '../../../shared/interface/notice.interface';
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { NoticeService } from '../../../shared/service/notice.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { NoticeButtonIcon } from '../../../shared/components/notice-button-icon/notice-button-icon.component';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [CommonModule, SidebarComponent, SpinnerComponent, CarouselComponent, NoticeButtonIcon],
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent implements OnInit {
  listNotice: INotice[] = [];
  notice: INotice | null = null;
  isLoading: boolean = false;

  constructor(
    private noticeService: NoticeService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.noticeService.notices$.subscribe((data) => {
      this.listNotice = data;
      this.notice = data[0];
    });
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
          this.isLoading = false;
        }),
      )
      .subscribe((notices: INotice[]) => {
        this.listNotice = notices;
        this.notice = notices[0] || null;
        this.isLoading = false;
      });
    this.cdr.detectChanges();
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'img/censure.jpg'; // imagen alternativa desde carpeta pública
  }

  getNoticesBySideBar(): INotice[] {
    return this.listNotice.slice(-3);
  }

  handleNoticeClick(notice: INotice) {
    this.notice = notice;
    this.cdr.detectChanges();
  }
}
