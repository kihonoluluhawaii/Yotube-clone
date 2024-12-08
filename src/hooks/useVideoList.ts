import { useQuery } from '@tanstack/react-query';
import { getVideoList } from '@/services/videoList.ts';
import { IVideo } from '@/models/video.ts';

export const useVideoList = (categoryId?: string) => {
  const { data } = useQuery<IVideo[]>({
    queryKey: ['videos', categoryId],
    queryFn: () => getVideoList(categoryId ?? undefined),
  });
  return { data };
};
