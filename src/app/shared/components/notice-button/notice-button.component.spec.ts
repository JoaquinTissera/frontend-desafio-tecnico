import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeButtonComponent } from './notice-button.component';

describe('NoticeButton', () => {
  let component: NoticeButtonComponent;
  let fixture: ComponentFixture<NoticeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoticeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
