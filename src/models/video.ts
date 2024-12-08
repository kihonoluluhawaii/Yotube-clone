export interface IVideo {
  categoryId: string;
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    categoryId: string;
    title: string;
    description: string;
    thumbnails: {
      high: { url: string };
      medium: { url: string };
    };
    publishedAt: string;
  };
}
