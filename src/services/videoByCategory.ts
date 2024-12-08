import { httpClient } from '@/services/httpClient.ts';

export const getVideoByCategory = async (categoryId?: string) => {
  const { data } = await httpClient.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoCategoryId: categoryId || '',
      order: 'date',
      hl: 'ko',
    },
  });
  return data.items || [];
};
