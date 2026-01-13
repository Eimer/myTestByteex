import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _http = inject(HttpClient);

  private readonly _config = environment.contentful;
  private readonly apiUrl = `${this._config.baseUrl}/${this._config.spaceId}/environments/${this._config.envId}/entries`;

  getEntries(contentType: string): Observable<any> {
    const params = new HttpParams()
      .set('content_type', contentType)
      .set('include', '5');

    return this._http.get(this.apiUrl, {
      params,
      headers: {
        Authorization: `Bearer ${this._config.token}`
      }
    });
  }

}
