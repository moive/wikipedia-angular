import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SearchArticle } from './pages/search/search.interface';
import { SearchService } from './pages/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  articles$!: Observable<SearchArticle[]>;
  constructor(private readonly searchService: SearchService) {}
  onSearch(val: string) {
    this.articles$ = this.searchService.search(val); //.pipe(tap(console.log)).subscribe();
  }
}
