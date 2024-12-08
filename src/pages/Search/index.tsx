import styled from '@emotion/styled';
import { useSearch } from '@/hooks/useSearch.ts';
import { useSearchParams } from 'react-router-dom';
import VideoList from '@/components/Video/VideoList.tsx';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search_query') || '';
  const { data: searchVideos = [] } = useSearch(query);

  return (
    <Container>
      <VideoList videos={searchVideos} />
    </Container>
  );
};

const Container = styled.div``;

export default Search;
