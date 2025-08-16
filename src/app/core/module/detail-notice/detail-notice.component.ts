import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { INotice } from '../../../shared/interface/notice.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { NoticeService } from '../../../shared/service/notice.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { NoticeButtonIcon } from '../../../shared/components/notice-button-icon/notice-button-icon.component';

@Component({
  selector: 'app-detail-notice',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, NoticeButtonIcon],
  templateUrl: './detail-notice.component.html',
  styleUrl: './detail-notice.component.css',
})
export class DetailNoticeComponent implements OnInit {
  notice: INotice | null = null;
  isLoading: boolean = false;

  constructor(
    private noticeService: NoticeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadNoticeFromRoute();
  }

  /**
   * Carga la noticia específica basada en el ID de la ruta
   */
  private loadNoticeFromRoute(): void {
    const noticeId = this.route.snapshot.paramMap.get('id');
    if (noticeId) {
      const foundNotice = this.noticeService.getNoticeById(noticeId);
      if (foundNotice) {
        this.notice = foundNotice;
      } else {
        this.goBack();
      }
    } else {
      this.goBack();
    }
  }

  /**
   * Maneja errores de carga de imágenes
   * @param event - Evento de error de la imagen
   */
  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'img/censure.jpg';
  }

  /**
   * Navega de vuelta a la lista principal de noticias
   */
  goBack(): void {
    this.router.navigate(['/']);
  }
}
