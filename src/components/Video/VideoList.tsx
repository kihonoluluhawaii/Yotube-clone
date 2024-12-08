import styled from '@emotion/styled';
import { IVideo } from '@/models/video.ts';
import VideoCard from '@/components/Video/VideoCard.tsx';
import React from 'react';

interface Props {
  videos: IVideo[];
  activeCategory?: string | null;
}
const VideoList = React.memo(({ videos }: Props) => {
  return (
    <Container>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export default VideoList;
