import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeButtonIcon } from './notice-button-icon.component';

describe('NoticeButtonIcon', () => {
  let component: NoticeButtonIcon;
  let fixture: ComponentFixture<NoticeButtonIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeButtonIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(NoticeButtonIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
