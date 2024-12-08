import styled from '@emotion/styled';
import { IconLogo } from '@/components/Icons';
import SearchBox from '@/components/SearchBox';
import Nav from '@/components/Header/Nav.tsx';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Logo to={'/'}>
        <IconLogo />
      </Logo>
      <SearchBox />
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  gap: 20px;
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default Header;
