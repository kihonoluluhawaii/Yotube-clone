import { httpClient } from '@/services/httpClient.ts';
import { IVideo } from '@/models/video.ts';

export const getVideoList = async (categoryId?: string): Promise<IVideo[]> => {
  const { data } = await httpClient.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 10,
      type: 'video',
      videoCategoryId: categoryId,
      order: 'date',
      hl: 'ko',
    },
  });

  return data.items || [];
};
