import styled from '@emotion/styled';
import { IconSideMenu } from '@/components/Icons';

interface Props {
  toggleSideMenu: () => void;
}
const SideMenuButton = ({ toggleSideMenu }: Props) => {
  return (
    <Container onClick={toggleSideMenu}>
      <button>
        <IconSideMenu />
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 34px;
  height: 34px;

  button {
    width: 100%;
    height: 100%;
    padding: 4px;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #5d5d5d;
      border-radius: 100px;
    }
  }
`;

export default SideMenuButton;
