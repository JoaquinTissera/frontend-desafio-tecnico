import { Component } from '@angular/core';
import { INotice } from '../../../shared/interface/notice.interface';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-notice',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css',
})
export class NoticeComponent {
  listNotice: INotice[] = [
    {
      article_id: '47ae80cc11ca20c181cf0dbe7f4da3a7',
      title: 'Galaxy notice 3 could outclass Apple AirTag with one clever design upgrade',
      link: 'https://www.sammobile.com/opinion/galaxy-notice-3-could-outclass-apple-airtag-with-one-clever-des...',
      description:
        "Although Samsung's original Galaxy notice was rather cheap-looking, especially in retrospect, the...",
      pubDate: '2025-08-13 09:52:12',
      image_url:
        'https://www.sammobile.com/wp-content/uploads/2023/12/Galaxy-notice-2-review-1.jpg',
      creator: ['Ayush Mukherjee'],
    },
    {
      article_id: '47ae80cc11ca20c181cf0dbe7f4da3a7',
      title: 'Galaxy notice 3 could outclass Apple AirTag with one clever design upgrade',
      link: 'https://www.sammobile.com/opinion/galaxy-notice-3-could-outclass-apple-airtag-with-one-clever-des...',
      description:
        "Although Samsung's original Galaxy notice was rather cheap-looking, especially in retrospect, the...",
      pubDate: '2025-08-13 09:52:12',
      image_url:
        'https://www.sammobile.com/wp-content/uploads/2023/12/Galaxy-notice-2-review-1.jpg',
      creator: ['Ayush Mukherjee'],
    },
    {
      article_id: '47ae80cc11ca20c181cf0dbe7f4da3a7',
      title: 'Galaxy notice 3 could outclass Apple AirTag with one clever design upgrade',
      link: 'https://www.sammobile.com/opinion/galaxy-notice-3-could-outclass-apple-airtag-with-one-clever-des...',
      description:
        "Although Samsung's original Galaxy notice was rather cheap-looking, especially in retrospect, the...",
      pubDate: '2025-08-13 09:52:12',
      image_url:
        'https://www.sammobile.com/wp-content/uploads/2023/12/Galaxy-notice-2-review-1.jpg',
      creator: ['Ayush Mukherjee'],
    },
    {
      article_id: '47ae80cc11ca20c181cf0dbe7f4da3a7',
      title: 'Galaxy notice 3 could outclass Apple AirTag with one clever design upgrade',
      link: 'https://www.sammobile.com/opinion/galaxy-notice-3-could-outclass-apple-airtag-with-one-clever-des...',
      description:
        "Although Samsung's original Galaxy notice was rather cheap-looking, especially in retrospect, the...",
      pubDate: '2025-08-13 09:52:12',
      image_url:
        'https://www.sammobile.com/wp-content/uploads/2023/12/Galaxy-notice-2-review-1.jpg',
      creator: ['Ayush Mukherjee'],
    },
  ];

  notice = this.listNotice[0];

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'img/censure.jpg'; // imagen alternativa desde carpeta pública
  }

  getNoticesBySideBar(): INotice[] {
    return this.listNotice.slice(-3);
  }
}
