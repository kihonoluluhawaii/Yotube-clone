import { httpClient } from '@/services/httpClient.ts';
import { IChannel } from '@/models/channel.ts';

export const getChannelInfo = async (channelId: string): Promise<IChannel> => {
  const { data } = await httpClient.get('/channels', {
    params: {
      part: 'snippet, statistics',
      id: channelId,
    },
  });
  return data.items?.[0];
};
