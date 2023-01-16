import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { WikipediaResponse, SearchArticle } from './search.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private readonly http: HttpClient) {}
  search(term: string): Observable<SearchArticle[]> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      formatversion: '2',
      srsearch: term,
      utf8: '1',
      // srlimit: 20, // default srlimit = 10
      origin: '*',
    };
    return this.http
      .get<WikipediaResponse>(environment.api, { params })
      .pipe(map((x) => x?.query?.search));
  }
}
