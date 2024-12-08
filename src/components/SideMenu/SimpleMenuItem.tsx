import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  icon: ReactNode;
  text: string;
  to?: string;
}
const SimpleMenuItem = ({ icon, text, to = '#' }: Props) => {
  return (
    <Container>
      <Box to={to}>
        {icon}
        <span>{text}</span>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #424141;
  }
`;

const Box = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  span {
    display: block;
    max-width: 62px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.7rem;
  }
`;

export default SimpleMenuItem;
