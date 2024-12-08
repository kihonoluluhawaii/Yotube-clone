import { httpClient } from '@/services/httpClient.ts';
import { IComment } from '@/models/comment.ts';

export const getComment = async (videoId: string): Promise<IComment[]> => {
  const { data } = await httpClient.get('/commentThreads', {
    params: {
      part: 'snippet',
      videoId: videoId,
      maxResults: 5,
    },
  });
  return data.items || [];
};
