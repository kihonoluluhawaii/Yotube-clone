import styled from '@emotion/styled';
import { ReactNode, useCallback, useState } from 'react';
import Header from '@/components/Header';
import SideMenuButton from '@/components/SideMenu/SideMenuButton.tsx';
import SideMenu from '@/components/SideMenu';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideMenu = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  return (
    <Container>
      <HeaderWrapper>
        <SideMenuButton toggleSideMenu={toggleSideMenu} />
        <Header />
      </HeaderWrapper>
      <ContentWrapper>
        <SideMenu isOpen={isOpen} />
        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #111;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
`;

export default Layout;
