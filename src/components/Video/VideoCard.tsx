import styled from '@emotion/styled';

import { useChannel } from '@/hooks/useChannel.ts';
import he from 'he';
import { formatCount } from '@/utils/formatCount.ts';
import { formatTimeAgo } from '@/utils/formatTimeAgo.ts';
import { IVideo } from '@/models/video.ts';
import { useNavigate } from 'react-router-dom';
import React, { useCallback, useMemo } from 'react';

interface Props {
  video: IVideo;
}
const VideoCard = React.memo(({ video }: Props) => {
  const navigate = useNavigate();
  const { channelInfo } = useChannel(video.snippet.channelId);
  const videoTitle = useMemo(() => he.decode(video.snippet.title), [video.snippet.title]);

  const handleVideoClick = useCallback(() => {
    navigate(`/watch?v=${video.id.videoId}`);
  }, [navigate, video.id.videoId]);

  return (
    <Container onClick={handleVideoClick}>
      <Thumbnail>
        <VideoThumbnail src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      </Thumbnail>
      <Info>
        {channelInfo?.snippet?.thumbnails?.default?.url && (
          <ChannelThumbnail src={channelInfo.snippet.thumbnails.default.url} />
        )}
        <Description>
          <div>
            <VideoTitle>{videoTitle}</VideoTitle>
          </div>
          <ChannelTitle>{channelInfo?.snippet?.title}</ChannelTitle>
          {channelInfo?.statistics?.viewCount && (
            <VideoCount>
              <span className="video-count">
                조회수 {formatCount(Number(channelInfo.statistics.videoCount))}회
              </span>
              <span className="dot">•</span>
              <span>{formatTimeAgo(video?.snippet?.publishedAt)}</span>
            </VideoCount>
          )}
        </Description>
      </Info>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 370px;
  height: 100%;
  max-height: 340px;
  box-sizing: border-box;
`;

const Thumbnail = styled.div`
  overflow: hidden;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  padding: 8px;
  gap: 10px;
  cursor: pointer;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const VideoTitle = styled.div`
  display: -webkit-box;
  padding-block: 4px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(1.4em * 2);
`;

const ChannelThumbnail = styled.img`
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  border-radius: 50%;
`;

const ChannelTitle = styled.div`
  align-self: flex-start;
  font-size: 0.85rem;
  font-weight: 600;
  transition: color 0.2s ease-in-out;
  color: darkgray;
  &:hover {
    color: #fff;
  }
`;

const VideoCount = styled.div`
  color: darkgray;
  font-size: 0.85rem;
`;
export default VideoCard;
