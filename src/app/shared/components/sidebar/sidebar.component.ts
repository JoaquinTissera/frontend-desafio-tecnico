import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INotice } from '../../interface/notice.interface';

/**
 * Componente sidebar que muestra noticias relacionadas
 * Componente reutilizable que recibe noticias como input
 * Emite eventos cuando se hace click en una noticia para navegar al detail
 */
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true, // Componente standalone (no necesita módulo)
})
export class SidebarComponent {
  @Input() notices: INotice[] = []; // Recibe noticias desde el componente padre
  @Output() noticeClick = new EventEmitter<INotice>(); // Emite evento cuando se hace click en una noticia

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
   * Maneja el click en una noticia del sidebar
   * Emite la noticia clickeada al componente padre para navegar al detail
   * @param notice - Noticia seleccionada
   */
  onNoticeClick(notice: INotice) {
    this.noticeClick.emit(notice); // Emite la noticia clickeada al padre
  }
}
