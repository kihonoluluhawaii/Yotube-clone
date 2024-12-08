import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  icon: ReactNode;
  text: string;
  to?: string;
}
const DetailMenuItem = ({ icon, text, to = '#' }: Props) => {
  return (
    <StyledNavLink to={to}>
      {icon}
      <span>{text}</span>
    </StyledNavLink>
  );
};

const StyledNavLink = styled(NavLink)`
  width: 216px;
  display: flex;
  align-items: center;
  padding: 8px 20px;
  cursor: pointer;
  gap: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #424141;
  }

  span {
    font-size: 0.85rem;
  }
`;

export default DetailMenuItem;
