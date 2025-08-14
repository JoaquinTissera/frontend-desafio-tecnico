export interface INotice {
  article_id: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image_url: string;
  creator: string[] | null;
}
