import { useQuery } from '@tanstack/react-query';
import { getComment } from '@/services/comment.ts';
import { IComment } from '@/models/comment.ts';

export const useComment = (videoId: string) => {
  const { data } = useQuery<IComment[]>({
    queryKey: ['comments', videoId],
    queryFn: () => getComment(videoId),
    enabled: !!videoId,
  });

  return { data };
};
