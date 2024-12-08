import { useVideoList } from '@/hooks/useVideoList.ts';
import VideoList from '@/components/Video/VideoList.tsx';
import Gnb from '@/components/Gnb';
import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useVideoByCategory } from '@/hooks/useVideoByCategory.ts';

const Home = () => {
  const { data: videos = [] } = useVideoList();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const { data: categoryVideos = [] } = useVideoByCategory(activeCategory);

  const handleCategoryChange = useCallback((categoryId: string | null) => {
    setActiveCategory(categoryId === '전체' ? null : categoryId);
  }, []);

  const formattedVideos = activeCategory ? categoryVideos : videos;
  return (
    <>
      {location.pathname === '/' && (
        <Gnb activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      )}
      <VideoList videos={formattedVideos} activeCategory={activeCategory} />
    </>
  );
};

export default Home;
