import { computed, inject, Injectable, signal } from '@angular/core';
import { NewsApi } from '../infrastructure/news-api';
import { Article } from '../domain/model/article.entity';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsFacade {
  private readonly newsApi = inject(NewsApi);
  private readonly articlesState = signal<Article[]>([]);
  private readonly loadingState = signal(false);
  private readonly errorState = signal('');

  readonly articles = computed(() => this.articlesState());
  readonly loading = computed(() => this.loadingState());
  readonly error = computed(() => this.errorState());

  search(query: string): void {
    this.loadingState.set(true);
    this.errorState.set('');

    this.newsApi.getArticles(query)
      .pipe(finalize(() => this.loadingState.set(false)))
      .subscribe({
        next: articles => this.articlesState.set(articles),
        error: error => {
          console.error('Error NewsAPI:', error);
          this.errorState.set('No se pudieron cargar las noticias.');
        }
      });
  }
}
