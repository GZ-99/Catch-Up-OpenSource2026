import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleAssembler} from './article-assembler';
import {environment} from '../../../environments/environment';
import {map, Observable} from 'rxjs';
import {Article} from '../domain/model/article.entity';
import {EverythingResponse} from './everything-response';

@Injectable({
  providedIn: 'root',
})
export class NewsApi {
  private readonly http = inject(HttpClient)
  private readonly assembler = inject(ArticleAssembler);
  private readonly endpoint = `${environment.newsApiBaseUrl}/everything`;

  getArticles(query:string): Observable<Article[]> {
    return this.http.get<EverythingResponse>(this.endpoint, {
      params: {
          q: query,
          sortBy: 'publishedAt',
          apiKey: environment.newsApiKey
        }
    }).pipe(
      map(response => this.assembler.toEntities(response.articles))
    );
  }
}
