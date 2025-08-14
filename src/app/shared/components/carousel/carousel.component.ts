import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INotice } from '../../interface/notice.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
})
export class CarouselComponent {
  @Input() notices: INotice[] = [];
  @Output() noticeClick = new EventEmitter<INotice>();

  currentIndex: number = 0;
  itemsPerPage: number = 3;

  get visibleNotices(): INotice[] {
    return this.notices.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  next() {
    console.log(this.notices.length);
    if (this.currentIndex + this.itemsPerPage < this.notices.length) {
      this.currentIndex += this.itemsPerPage;
    }
  }

  prev() {
    if (this.currentIndex - this.itemsPerPage >= 0) {
      this.currentIndex -= this.itemsPerPage;
    }
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'img/censure.jpg'; // imagen alternativa desde carpeta pública
  }

  onNoticeClick(notice: INotice) {
    this.noticeClick.emit(notice);
  }
}
