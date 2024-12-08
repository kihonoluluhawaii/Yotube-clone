import { httpClient } from '@/services/httpClient.ts';
import { Item, IVideoCategories } from '@/models/videoCategories.ts';

export const getVideoCategories = async (regionCode: string = 'KR'): Promise<Item[]> => {
  const { data } = await httpClient.get<IVideoCategories>('/videoCategories', {
    params: { part: 'snippet', regionCode, hl: 'ko' },
  });
  return data.items || [];
};
