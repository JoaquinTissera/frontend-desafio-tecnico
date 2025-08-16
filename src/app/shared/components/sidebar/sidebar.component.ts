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

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'img/censure.jpg';
  }

  
  onNoticeClick(notice: INotice) {
    this.noticeClick.emit(notice);
  }
}
