import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INotice } from '../../interface/notice.interface';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true,
})
export class SidebarComponent {
  @Input() notices: INotice[] = [];
  @Output() noticeClick = new EventEmitter<INotice>();

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
   * Maneja el click en una noticia del sidebar
   * Emite la noticia clickeada al componente padre
   * @param notice - Noticia seleccionada
   */
  onNoticeClick(notice: INotice) {
    this.noticeClick.emit(notice);
  }
}
