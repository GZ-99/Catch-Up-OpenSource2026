import { Injectable } from '@angular/core';
import {ArticleResource} from './everything-response';
import {Article} from '../domain/model/article.entity';

@Injectable({
  providedIn: 'root',
})
export class ArticleAssembler {
  toEntity(resource: ArticleResource): Article {
    return new Article(
      resource.source?.name ?? '',
      resource.author ?? '',
      resource.title ?? '',
      resource.description ?? '',
      resource.url ?? '',
      resource.urlToImage ?? '',
      resource.publishedAt ?? ''
    );
  }

  toEntities(resources:ArticleResource[]): Article[] {
    return resources.map(resource => this.toEntity(resource));
  }

}
