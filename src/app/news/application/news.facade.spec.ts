import { TestBed } from '@angular/core/testing';

import { NewsFacade } from './news.facade';

describe('NewsFacade', () => {
  let service: NewsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
