import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BaseApiService } from './base.service';
import { INotice } from '../interface/notice.interface';

@Injectable({
  providedIn: 'root',
})
export class NoticeService extends BaseApiService {
  private readonly baseUrl = 'https://newsdata.io/api/1/latest';

  constructor(http: HttpClient) {
    super(http);
  }

  getLatestNotice(query: string = 'apple', language: string = 'en'): Observable<INotice[]> {
    return this.get(this.baseUrl, { q: query, language }).pipe(
      map((res: any) => res.results as INotice[]),
    );
  }
}
