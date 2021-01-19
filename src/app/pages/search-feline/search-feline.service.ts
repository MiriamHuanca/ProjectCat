import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class SearchFelineService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllBreeds(): Observable<any> {
    return this.http.get(`${this.url}breeds`);
  }

  public getBreedsById(id: string): Observable<any> {
    return this.http.get(`${this.url}images/search?breed_id=${id}`);
  }

}
