import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export abstract class BaseApiService {
  protected readonly apiKey = environment.apiKey;
  protected readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(protected http: HttpClient) {}

  protected get(endpoint: string, params: Record<string, string | number> = {}): Observable<any> {
    const url = new URL(endpoint);

    // Agregar API Key
    url.searchParams.set('apikey', this.apiKey);

    // Agregar parámetros extra
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });

    return this.http.get(url.toString());
  }
}
