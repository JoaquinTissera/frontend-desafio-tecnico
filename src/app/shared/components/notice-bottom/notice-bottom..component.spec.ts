import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBottomComponent } from './notice-bottom.component';

describe('NoticeBottom', () => {
  let component: NoticeBottomComponent;
  let fixture: ComponentFixture<NoticeBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeBottomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoticeBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
