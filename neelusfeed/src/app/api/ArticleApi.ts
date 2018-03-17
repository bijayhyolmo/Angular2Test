import { BaseApi } from './BaseApi';
import { IArticle } from '../interfaces/IArticle';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleApi extends BaseApi<IArticle> {
    public baseUrl = '';
}
