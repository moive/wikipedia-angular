import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { SearchService } from './pages/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly searchService: SearchService) {
    this.searchService.search('angular').pipe(tap(console.log)).subscribe();
  }
}
