import React from "react";
import styled from "styled-components";

const section = [
  "politics",
  "economy",
  "society",
  "culture",
  "world",
  "tech",
  "entertainment",
  "opinion",
];

interface NewsMenuProps {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string | null>>;
}

const NewsMenu = ({
  selectedSection,
  setSelectedSection,
  setCurrentPage,
  setSearchInput,
}: NewsMenuProps) => {
  return (
    <MenusWrapper>
      <Menus>
        {section.map((sec) => (
          <Menu
            key={sec}
            onClick={() => {
              setSelectedSection(sec);
              setCurrentPage(1);
              setSearchInput(null);
            }}
            selected={selectedSection === sec}
          >
            {sec}
          </Menu>
        ))}
      </Menus>
    </MenusWrapper>
  );
};

export default NewsMenu;

const MenusWrapper = styled.div`
  padding: 0 5rem;
  border-bottom: 1px solid #ccc;
`;
const Menus = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Menu = styled.li<{ selected: boolean }>`
  cursor: pointer;
  padding: 1rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ selected }) => (selected ? "#c80000" : "#999")};
  border-bottom: 2px solid ${({ selected }) => (selected ? "#c80000" : "#fff")};
  &:hover {
    border-color: #c80000;
  }
`;
