import { useState } from "react";
import styled from "styled-components";

interface NewsHeaderProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string | null>>;
}

const NewsHeader = ({ setSearchInput }: NewsHeaderProps) => {
  const [input, setInput] = useState<string>("");

  return (
    <Header>
      <Logo>SSN.</Logo>
      <SearchForm
        onSubmit={(e) => {
          e.preventDefault();
          setSearchInput(input);
          setInput("");
        }}
      >
        <SearchInput
          type="text"
          placeholder="검색어를 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchBtn type="submit">검색</SearchBtn>
      </SearchForm>
    </Header>
  );
};

export default NewsHeader;

const Header = styled.header`
  padding: 1rem 5rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  color: #c80000;
  font-style: italic;
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const SearchInput = styled.input`
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;
const SearchBtn = styled.button`
  background-color: #d30000;
  color: #fff;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  cursor: pointer;
`;
