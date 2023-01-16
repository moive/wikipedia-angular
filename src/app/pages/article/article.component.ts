import { Component, Input } from '@angular/core';
import { SearchArticle } from '../search/search.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article!: SearchArticle;
}
