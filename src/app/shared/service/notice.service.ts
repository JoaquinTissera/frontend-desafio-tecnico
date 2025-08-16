import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { BaseApiService } from './base.service';
import { INotice } from '../interface/notice.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoticeService extends BaseApiService {
  private readonly baseUrl = `${environment.apiBaseUrl}/latest`;

  private noticesSubject = new BehaviorSubject<INotice[]>([]);
  public notices$ = this.noticesSubject.asObservable();

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * Busca una noticia por ID en el cache local
   * @param noticeId - ID de la noticia a buscar
   * @returns La noticia encontrada o undefined si no existe
   */
  getNoticeById(noticeId: string | undefined) {
    const currentNotices = this.noticesSubject.getValue();
    return currentNotices.find((value) => value.article_id === noticeId);
  }

  /**
   * Obtiene noticias desde la API y las guarda en cache local.
   * Si ya hay datos en cache y no se pide refresh, devuelve lo que está en memoria.
   * @param query - Término de búsqueda (por defecto: 'apple')
   * @param language - Idioma de las noticias (por defecto: 'en')
   * @param forceRefresh - Si true, vuelve a pedir datos a la API aunque haya cache
   * @returns Observable con array de noticias
   */
  getLatestNotice(
    query: string = 'apple',
    language: string = 'en',
    forceRefresh: boolean = false,
  ): Observable<INotice[]> {
    const current = this.noticesSubject.getValue();

    if (current.length > 0 && !forceRefresh) {
      // Ya tengo datos en cache → devuelvo el observable actual
      return this.notices$;
    }

    return this.get(this.baseUrl, { q: query, language }).pipe(
      map((res: any) => {
        const notices = res.results as INotice[];

        // Refrescar solo si cache vacío o forzado
        this.noticesSubject.next(notices);

        return notices;
      }),
    );
  }

  /**
   * Agrega una nueva noticia al inicio del cache local
   * Útil para noticias creadas localmente antes de sincronizar con API
   * @param notice - Noticia a agregar
   */
  addNotice(notice: INotice) {
    const current = this.noticesSubject.getValue();
    const updated = [notice, ...current];
    this.noticesSubject.next(updated);
  }

  /**
   * Actualiza una noticia existente y la mueve al inicio del cache
   * Mantiene la noticia actualizada visible en la parte superior
   * @param updatedNotice - Noticia con datos actualizados
   */
  updateNotice(updatedNotice: INotice) {
    const currentNotices = this.noticesSubject.getValue();
    const index = currentNotices.findIndex((n) => n.article_id === updatedNotice.article_id);

    if (index !== -1) {
      const updatedList = [...currentNotices];
      updatedList[index] = { ...updatedNotice };

      const [movedItem] = updatedList.splice(index, 1);
      updatedList.unshift(movedItem);

      this.noticesSubject.next(updatedList);
    }
  }

  /**
   * Elimina una noticia del cache local por ID
   * @param noticeId - ID de la noticia a eliminar
   */
  deleteNotice(noticeId: string | undefined) {
    const currentNotices = this.noticesSubject.getValue();
    const filter = currentNotices.filter((value) => value.article_id !== noticeId);
    this.noticesSubject.next(filter);
  }
}
