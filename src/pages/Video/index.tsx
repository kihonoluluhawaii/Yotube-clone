import styled from '@emotion/styled';
import VideoPlayer from '@/components/Video/VideoPlayer.tsx';
import { useSearchParams } from 'react-router-dom';

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  if (!videoId) return null;

  return (
    <Container>
      <CurrentVideo>
        <VideoPlayer videoId={videoId} />
      </CurrentVideo>
      <PlayList>playlistplaylistplaylist</PlayList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const CurrentVideo = styled.div`
  width: 100%;
  min-width: 480px;
  height: 100vh;
`;

const PlayList = styled.div`
  box-shadow: inset 0 0 20px white;
  width: 600px;
`;
export default WatchVideo;
