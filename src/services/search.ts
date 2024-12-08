import { IVideo } from '@/models/video.ts';
import { httpClient } from '@/services/httpClient.ts';

export const getSearchResults = async (query: string): Promise<IVideo[]> => {
  const { data } = await httpClient.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 5,
      q: query,
      type: 'video',
      order: 'relevance',
      hl: 'ko',
    },
  });
  return data.items || [];
};
