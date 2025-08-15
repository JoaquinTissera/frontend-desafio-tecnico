import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { BaseApiService } from './base.service';
import { INotice } from '../interface/notice.interface';

@Injectable({
  providedIn: 'root',
})
export class NoticeService extends BaseApiService {
  private readonly baseUrl = 'https://newsdata.io/api/1/latest';

  // Estado en memoria (cache local)
  private noticesSubject = new BehaviorSubject<INotice[]>([]);
  public notices$ = this.noticesSubject.asObservable();

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * Obtiene noticias desde la API y las guarda en cache local
   */
  getLatestNotice(query: string = 'apple', language: string = 'en'): Observable<INotice[]> {
    return this.get(this.baseUrl, { q: query, language }).pipe(
      map((res: any) => {
        const notices = res.results as INotice[];
        this.noticesSubject.next(notices); // Actualiza cache
        return notices;
      })
    );
  }

  addNotice(notice: INotice) {
    const current = this.noticesSubject.getValue();
    const updated = [notice, ...current];
    this.noticesSubject.next(updated);
  }
}

