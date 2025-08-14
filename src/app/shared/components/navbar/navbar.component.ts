import { Component, Input } from '@angular/core';
import { NoticeBottomComponent } from '../notice-bottom/notice-bottom.component';
import { INotice } from '../../interface/notice.interface';

@Component({
  selector: 'app-navbar',
  imports: [NoticeBottomComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() notice: INotice | null = null;
}
