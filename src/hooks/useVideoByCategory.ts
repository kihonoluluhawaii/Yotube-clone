import { useQuery } from '@tanstack/react-query';
import { getVideoByCategory } from '@/services/videoByCategory.ts';

export const useVideoByCategory = (categoryId: string | null) => {
  const { data } = useQuery({
    queryKey: ['videoByCategory', categoryId ?? undefined],
    queryFn: () => getVideoByCategory(categoryId ?? undefined),
    enabled: categoryId !== null,
  });

  return { data };
};
