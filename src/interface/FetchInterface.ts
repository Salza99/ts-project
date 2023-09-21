export interface FetchInterface {
  count: number;
  next: string;
  previous: null;
  results: [
    {
      id: number;
      title: string;
      url: string;
      image_url: string;
      news_site: string;
      summary: string;
      published_at: Date;
      updated_at: Date;
      featured: boolean;
      launches: [];
      events: [];
    }
  ];
}
export interface NewsFetched {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  launches: [];
  events: [];
}
