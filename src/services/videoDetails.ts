import { httpClient } from '@/services/httpClient.ts';
import { IVideo } from '@/models/video.ts';

export const getVideoDetails = async (videoId: string): Promise<IVideo | null> => {
  const { data } = await httpClient.get('videos', {
    params: {
      part: 'snippet,statistics,contentDetails,player',
      id: videoId,
      hl: 'ko',
    },
  });
  return data.items[0];
};
