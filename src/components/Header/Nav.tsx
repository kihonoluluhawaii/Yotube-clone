import styled from '@emotion/styled';
import { IconAlert, IconMyPage, IconUploadVideo } from '@/components/Icons';

const Nav = () => {
  return (
    <Container>
      <button>
        <IconUploadVideo />
      </button>
      <button>
        <IconAlert />
      </button>
      <button>
        <IconMyPage />
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;

  button {
    border-radius: 50%;
    padding: 8px;
    width: 40px;
    cursor: pointer;
    svg {
      color: white;
    }
    &:hover {
      background-color: #212121;
    }
  }
`;

export default Nav;
