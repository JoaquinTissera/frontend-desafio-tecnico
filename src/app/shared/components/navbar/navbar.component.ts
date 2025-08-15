import { Component, Input } from '@angular/core';
import { NoticeButtonComponent } from '../notice-button/notice-button.component';

@Component({
  selector: 'app-navbar',
  imports: [NoticeButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
