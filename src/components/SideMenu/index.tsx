import styled from '@emotion/styled';
import {
  IconDownload,
  IconHome,
  IconMyPage,
  IconShorts,
  IconSubscribed,
  IconYtMusic,
} from '@/components/Icons';
import DetailMenuItem from '@/components/SideMenu/DetailMenuItem.tsx';
import SimpleMenuItem from '@/components/SideMenu/SimpleMenuItem.tsx';

interface Props {
  isOpen: boolean;
}

const menuList = [
  { icon: <IconHome />, text: '홈', to: '/' },
  { icon: <IconShorts />, text: 'Shorts', to: '/shorts' },
  { icon: <IconSubscribed />, text: '구독', to: '/feed/subscriptions' },
  { icon: <IconYtMusic />, text: 'Youtube Music', to: '/music/youtube' },
  { icon: <IconMyPage />, text: '내 페이지', to: '/feed/you' },
  { icon: <IconDownload />, text: '오프라인 저장 동영상', to: 'feed/downloads' },
];

const SideMenu = ({ isOpen }: Props) => {
  return (
    <Container isOpen={isOpen}>
      {isOpen && (
        <MainSection isOpen={isOpen}>
          {menuList
            .filter(({ text }) => text !== '오프라인 저장 동영상' && text !== '내 페이지')
            .map(({ icon, text, to }, index) => (
              <DetailMenuItem key={index} icon={icon} text={text} to={to} />
            ))}
          <Divider />
        </MainSection>
      )}

      {!isOpen && (
        <MainSection isOpen={isOpen}>
          {menuList.map(({ icon, text, to }, index) => (
            <SimpleMenuItem key={index} icon={icon} text={text} to={to} />
          ))}
        </MainSection>
      )}
    </Container>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '216' : '70')}px;
  transition: 0.1s ease-in-out;
`;

const MainSection = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: ${({ isOpen }) => (isOpen ? '216' : '70')}px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px 0 0 4px;
  svg {
    width: 24px;
  }
`;

const Divider = styled.div`
  width: 200px;
  height: 1px;
  margin-left: 10px;
  background-color: gray;
`;
export default SideMenu;
