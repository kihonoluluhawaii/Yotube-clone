export interface IChannel {
  id: string;
  snippet: {
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    subscriberCount?: string;
  };
  statistics?: {
    subscriberCount: string;
    videoCount: string;
    viewCount: string;
  };
}
