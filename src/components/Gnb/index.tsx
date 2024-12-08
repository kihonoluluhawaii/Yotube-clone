import styled from '@emotion/styled';
import { useCategory } from '@/hooks/useCategory.ts';

interface Props {
  activeCategory: string | null;
  onCategoryChange: (activeCategory: string | null) => void;
}
const Gnb = ({ activeCategory, onCategoryChange }: Props) => {
  const { data: categories = [], isLoading } = useCategory('KR');

  if (isLoading) return <div>로딩중...</div>;

  const formattedCategories = [{ id: null, snippet: { title: '전체' } }, ...categories];
  return (
    <Container>
      <CategoryWrapper>
        {formattedCategories?.map((category) => (
          <Category
            key={category.id}
            isActive={category.id === activeCategory}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.snippet.title}
          </Category>
        ))}
      </CategoryWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 60px;
  z-index: 10;
  background-color: #111;
`;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 14px;
  padding: 10px 20px;
`;

const Category = styled.div<{ isActive: boolean }>`
  padding: 8px 16px;
  font-size: 0.8rem;
  color: ${({ isActive }) => (isActive ? '#000' : '#fff')};
  background-color: ${({ isActive }) => (isActive ? '#fff' : '#2c2c2c')};
  border-radius: 6px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#fff' : '#3f3f41')};
  }
`;
export default Gnb;
