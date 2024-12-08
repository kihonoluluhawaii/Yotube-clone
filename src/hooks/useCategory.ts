import { useQuery } from '@tanstack/react-query';
import { getVideoCategories } from '@/services/category.ts';
import { Item } from '@/models/videoCategories.ts';

export const useCategory = (regionCode: string = 'KR') => {
  const { data, isLoading, error } = useQuery<Item[]>({
    queryKey: ['videoCategories', regionCode],
    queryFn: () => getVideoCategories(regionCode),
  });
  return {
    data: data || [],
    isLoading,
    error,
  };
};
