import styled from '@emotion/styled';
import cn from 'classnames';
import React, { useRef, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { IconSearch } from '@/components/Icons';
import { MdKeyboardVoice } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();

    if (value.trim()) {
      const searchParams = new URLSearchParams();
      searchParams.set('search_query', value.trim());
      navigate(`/results?${searchParams.toString()}`);
    }
  };

  const handleInputFocus = (isFocused: boolean) => {
    setIsActive(isFocused);
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <FormBox className={cn({ active: isActive })}>
          {isActive && (
            <div className="btn-search">
              <IconSearch />
            </div>
          )}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="검색"
            ref={inputRef}
            onFocus={() => handleInputFocus(true)}
            onBlur={() => handleInputFocus(false)}
          />

          <button className="btn-keyboard">
            <img src="https://www.gstatic.com/inputtools/images/tia.png" alt="keyboard button" />
          </button>
          {value && (
            <button className="btn-close" onClick={handleReset}>
              <IoCloseOutline />
            </button>
          )}
        </FormBox>

        <Box onClick={handleSearch}>
          <IconSearch />
        </Box>

        <VoiceBox>
          <MdKeyboardVoice />
        </VoiceBox>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 640px;
  min-width: 310px;
  svg {
    color: #eee;
  }
`;

const FormBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;

  padding: 0 6px 0 20px;
  box-sizing: border-box;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  border: 1px solid #544f4f;
  input {
    display: flex;
    align-items: center;
    width: 100%;
    color: #ddd;
  }

  &.active {
    border: 1px solid #18f;
  }

  .btn-search {
    height: 24px;
    margin-right: 10px;
  }
  .btn-keyboard {
    width: 24px;
    margin-left: auto;
    &:hover {
      color: #fff;
    }
  }
  .btn-close {
    width: 24px;
  }
`;

const Box = styled.div`
  padding: 8px 16px;
  background-color: #2c2c2c;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  cursor: pointer;
  svg {
    width: 20px;
  }
`;

const VoiceBox = styled.button`
  width: 40px;
  height: 40px;
  background-color: #2c2c2c;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #424141;
  }

  svg {
    padding: 8px;
    width: 40px;
    height: 40px;
  }
`;
export default SearchBox;
