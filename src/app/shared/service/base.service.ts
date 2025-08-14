import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseApiService {
  protected readonly apiKey = 'pub_bdab741ff3bb4affa7ecb378e2072519';

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
