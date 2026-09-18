import { Component, signal } from '@angular/core';
import { NewsPage } from './news/presentation/news-page/news-page';

@Component({
  selector: 'app-root',
  imports: [NewsPage],
  template: '<app-news-page />',
})
export class App {}
