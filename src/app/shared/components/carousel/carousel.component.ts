import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INotice } from '../../interface/notice.interface';

/**
 * Componente carousel para navegar entre noticias
 * Implementa paginación simple con botones prev/next
 * Muestra un número limitado de noticias por página
 * Navega al detail component al hacer click en una noticia
 */
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true, // Componente standalone (no necesita módulo)
})
export class CarouselComponent {
  @Input() notices: INotice[] = []; // Lista completa de noticias desde el componente padre
  @Output() noticeClick = new EventEmitter<INotice>(); // Evento emitido cuando se hace click en una noticia

  currentIndex: number = 0; // Índice actual del carousel (posición de inicio)
  itemsPerPage: number = 3; // Número de items visibles por página

  /**
   * Getter que calcula las noticias visibles según el índice actual
   * Utiliza slice para obtener solo las noticias de la página actual
   * @returns Array con las noticias visibles en la página actual
   */
  get visibleNotices(): INotice[] {
    return this.notices.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  /**
   * Navega a la siguiente página del carousel
   * Verifica que haya más noticias disponibles antes de avanzar
   */
  next() {
    console.log(this.notices.length); // Debug: muestra el total de noticias
    if (this.currentIndex + this.itemsPerPage < this.notices.length) {
      this.currentIndex += this.itemsPerPage; // Avanza al siguiente conjunto de noticias
    }
  }

  /**
   * Navega a la página anterior del carousel
   * Verifica que no se vaya a un índice negativo
   */
  prev() {
    if (this.currentIndex - this.itemsPerPage >= 0) {
      this.currentIndex -= this.itemsPerPage; // Retrocede al conjunto anterior de noticias
    }
  }

  /**
   * Maneja errores de carga de imágenes
   * Reemplaza la imagen que falló con una imagen alternativa
   * @param event - Evento de error de la imagen
   */
  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'img/censure.jpg'; // Imagen alternativa desde carpeta pública
  }

  /**
   * Maneja el click en una noticia del carousel
   * Emite la noticia clickeada al componente padre para navegar al detail
   * @param notice - Noticia seleccionada
   */
  onNoticeClick(notice: INotice) {
    this.noticeClick.emit(notice); // Emite la noticia clickeada al padre
  }
}
