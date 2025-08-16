import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { INotice } from '../../../shared/interface/notice.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { NoticeService } from '../../../shared/service/notice.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [CommonModule, SidebarComponent, SpinnerComponent, CarouselComponent],
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
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.noticeService.notices$.subscribe((data) => {
      this.listNotice = data;
      this.notice = data[0];
    });
    this.loadNotices();
  }

  /**
   * Método para cargar noticias desde la API
   * @param query - Término de búsqueda (por defecto: 'apple')
   * @param language - Idioma de las noticias (por defecto: 'en')
   */
  loadNotices(query: string = 'apple', language: string = 'en'): void {
    this.isLoading = true;
    this.noticeService
      .getLatestNotice(query, language)
      .pipe(
        catchError((err) => {
          console.error('Error cargando noticias', err);
          return of([]);
        }),
      )
      .subscribe((notices: INotice[]) => {
        this.listNotice = notices;
        this.notice = notices[0] || null;
        this.isLoading = false;
      });
    this.cdr.detectChanges();
  }

  /**
   * Maneja errores de carga de imágenes
   * Reemplaza la imagen que falló con una imagen alternativa
   * @param event - Evento de error de la imagen
   */
  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'img/censure.jpg';
  }

  /**
   * Obtiene las últimas 3 noticias para mostrar en el sidebar
   * @returns Array con las últimas 3 noticias
   */
  getNoticesBySideBar(): INotice[] {
    return this.listNotice.slice(-3); // Toma los últimos 3 elementos del array
  }

  /**
   * Maneja el click en una noticia desde el sidebar o carousel
   * Actualiza la noticia seleccionada y fuerza la actualización de la vista
   * @param notice - Noticia seleccionada
   */
  handleNoticeClick(notice: INotice) {
    this.router.navigate(['/detail', notice.article_id]);
  }
}
