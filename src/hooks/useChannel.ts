import { useQuery } from '@tanstack/react-query';
import { getChannelInfo } from '@/services/channel.ts';
import { IChannel } from '@/models/channel.ts';

export const useChannel = (channelId: string) => {
  const {
    data: channelInfo,
    isLoading,
    isError,
  } = useQuery<IChannel>({
    queryKey: ['channels', channelId],
    queryFn: () => getChannelInfo(channelId),
    enabled: !!channelId,
  });
  return {
    channelInfo,
    isLoading,
    isError,
  };
};
