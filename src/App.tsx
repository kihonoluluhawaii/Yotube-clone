import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout.tsx';
import WatchVideo from '@/pages/Video';
import Search from '@/pages/Search';

const App = () => {
  return (
    <Container>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<WatchVideo />} />
          <Route path="/results" element={<Search />} />
        </Routes>
      </Layout>
    </Container>
  );
};

const Container = styled.div``;

export default App;
