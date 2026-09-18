
export interface ArticleResource {
  source: {
    id: null | string;
    name: string;
  }
  author:      null | string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  null | string;
  publishedAt: string;
  content:     string;
}

export interface EverythingResponse {
  status: string;
  totalResults: number;
  articles: ArticleResource[];
}
