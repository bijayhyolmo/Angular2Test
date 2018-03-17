import { Component, OnInit } from '@angular/core';
import { ArticleApi } from '../../api/ArticleApi';
import { IArticle } from '../../interfaces/IArticle';
import { Utilities } from '../../api/utilities';

export interface IArticleFilter {
  filterParameter: string;
  results: IArticle[];
}

@Component({
  selector: 'app-article-cmp',
  templateUrl: './article-cmp.component.html',
  styleUrls: ['./article-cmp.component.css'],
  providers: [ArticleApi],
})

export class ArticleCmpComponent implements OnInit {
  private _articles: IArticle[];
  public filter: IArticleFilter;
  constructor(private _api: ArticleApi) {
    this._articles = [];
    this.filter = {
      filterParameter: '',
      results: [],
    };
  }

  ngOnInit() {
    this._getAllArticles();
  }

  private _getAllArticles(): void {
    this._api.get().then((response: IArticle[]) => {
      this._articles = response;
      this.filterArticles();
    });
  }

  public filterArticles(): void {
    const param: string = this.filter.filterParameter;
    if (Utilities.Type.isString(param)) {
      this.filter.results = this._articles.filter(a => a.Text.indexOf(param) >= 0 || a.Title.indexOf(param) >= 0);
    } else {
      this.filter.filterParameter = '';
      this.filter.results = this._articles;
    }
  }
}
