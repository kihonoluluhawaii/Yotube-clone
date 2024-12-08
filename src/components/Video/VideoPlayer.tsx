import styled from '@emotion/styled';
import { useVideoDetails } from '@/hooks/useVideoDetail.ts';
import { useChannel } from '@/hooks/useChannel.ts';
import { formatCount } from '@/utils/formatCount.ts';
import { useComment } from '@/hooks/useComment.ts';
import Comment from '@/components/Comment';
import React from 'react';

interface Props {
  videoId: string;
}
const VideoPlayer = React.memo(({ videoId }: Props) => {
  const { data } = useVideoDetails(videoId);
  const channelId = data?.snippet?.channelId;
  const { channelInfo } = useChannel(channelId || '');
  const { data: comment } = useComment(videoId);
  return (
    <Container>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={data?.snippet.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <Title>{data?.snippet.title}</Title>
      <ChannelInfo>
        {channelInfo?.snippet?.thumbnails?.default?.url && (
          <ChannelThumbnail src={channelInfo.snippet.thumbnails.default.url} />
        )}
        <Description>
          <ChannelProfile>
            <ChannelTitle>{channelInfo?.snippet?.title}</ChannelTitle>
            <Subscribers>
              구독자 {formatCount(Number(channelInfo?.statistics?.subscriberCount))}명
            </Subscribers>
          </ChannelProfile>
          <Subscribed>구독</Subscribed>
          <ActionMenu>
            <button>따봉안따봉</button>
            <button>공유</button>
            <button>오프라인 저장</button>
            <button>Thanks</button>
            <button>클립</button>
          </ActionMenu>
        </Description>
      </ChannelInfo>
      <Comment comment={comment} />
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 60vh;

  iframe {
    border-radius: 16px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
`;

const ChannelInfo = styled.div`
  display: flex;
  padding: 8px;
  gap: 10px;
  cursor: pointer;
`;

const ChannelThumbnail = styled.img`
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  border-radius: 50%;
`;

const Description = styled.div`
  display: flex;
  gap: 16px;
`;

const ChannelProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const ChannelTitle = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
`;

const Subscribers = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #aaa;
`;

const Subscribed = styled.button`
  width: 56px;
  padding-inline: 10px;
  border-radius: 18px;
  background-color: #fff;
  font-size: 14px;
  color: #111;
`;

const ActionMenu = styled.div`
  button {
    color: #fff;
  }
`;
export default VideoPlayer;
