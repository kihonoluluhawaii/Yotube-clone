export interface IVideoCategories {
  kind: string;
  etag: string;
  items: Item[];
}

export interface Item {
  id: string;
  snippet: Snippet;
}

export interface Snippet {
  title: string;
  assignable: boolean;
  channelId: string;
}
