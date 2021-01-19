import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class PictureFelineService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getImages(page: number): Observable<any> {
    return this.http.get(`${this.url}images/search?limit=18&order=Random&size=small&page=${page}`);
  }

}
