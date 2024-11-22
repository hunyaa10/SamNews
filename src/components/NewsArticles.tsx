import styled from "styled-components";
import { NewsArticle } from "../api";
import React from "react";

interface NewsArticlesProps {
  filteredNews: NewsArticle[] | null;
  currentPage: number;
  totalPage: number;
  pageSize: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const NewsArticles = ({
  filteredNews,
  currentPage,
  totalPage,
  pageSize,
  setCurrentPage,
}: NewsArticlesProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPage }, (_, idx) => idx + 1);

  return (
    <>
      <PageBox>
        <PageBtn
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </PageBtn>
        <Page>
          {currentPage} / {totalPage}
        </Page>
        <PageBtn
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          다음
        </PageBtn>
      </PageBox>
      <ArticlesWrapper>
        <Articles>
          {filteredNews?.map((news) => (
            <Article key={news.id}>
              <InfoBox>
                <InfoText>{news.publisher}</InfoText>
                <InfoText>{news.published_at.split("T")[0]}</InfoText>
              </InfoBox>
              <Img src={news.image_url} alt="news-image" />
              <Title>{news.title}</Title>
              <Summary>{news.summary.slice(0, 100)}...</Summary>
            </Article>
          ))}
        </Articles>
      </ArticlesWrapper>
    </>
  );
};

export default NewsArticles;

const ArticlesWrapper = styled.div`
  padding: 2rem 5rem;
  margin-bottom: 3rem;
`;
const Articles = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 1.5rem;
`;
const Article = styled.li`
  border-top: 3px solid #ececec;
`;
const Img = styled.img`
  margin: auto;
  max-height: 250px;
`;
const Title = styled.h3`
  padding: 0.5rem 0;
`;
const Summary = styled.p``;
const InfoBox = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InfoText = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #999;
`;

const PageBox = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const PageBtn = styled.button`
  background-color: #cfcfcf;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
const Page = styled.p``;
