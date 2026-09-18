import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsPage } from './news/presentation/news-page/news-page';

@Component({
  selector: 'app-root',
  imports: [NewsPage],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '<app-news-page />',
})
export class App {}
