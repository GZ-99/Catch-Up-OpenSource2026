import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NewsFacade } from '../../application/news.facade';

@Component({
  selector: 'app-news-page',
  imports: [DatePipe],
  templateUrl: './news-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './news-page.css',
})
export class NewsPage implements OnInit {
  protected readonly facade = inject(NewsFacade);
  protected readonly query = signal('tesla');

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    const query = this.query().trim();
    if (query) {
      this.facade.search(query);
    }
  }
}
