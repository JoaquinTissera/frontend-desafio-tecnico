import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'img/censure.jpg'; // imagen alternativa desde carpeta pública
  }
}
