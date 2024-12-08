import { useQuery } from '@tanstack/react-query';
import { IVideo } from '@/models/video.ts';
import { getVideoDetails } from '@/services/videoDetails.ts';

export const useVideoDetails = (videoId: string | null) => {
  return useQuery<IVideo | null>({
    queryKey: ['videoDetail', videoId],
    queryFn: () => getVideoDetails(videoId!),
    enabled: !!videoId,
  });
};
