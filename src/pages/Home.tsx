import { useEffect, useState } from "react";
import { getSamsungNewsData, NewsArticle } from "../api";
import NewsHeader from "../components/NewsHeader";
import NewsMenu from "../components/NewsMenu";
import NewsArticles from "../components/NewsArticles";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [newsData, setNewsData] = useState<NewsArticle[] | null>(null);
  const [selectedSection, setSelectedSection] = useState<string>("politics");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const fetchNewsData = async (section: string) => {
    try {
      const res = await getSamsungNewsData(section, currentPage);
      if (res) {
        console.log(res);
        setNewsData(res.data);
        setCurrentPage(res.page);
        setTotalPage(res.total_pages);
        setPageSize(res.page_size);
      }
    } catch (e) {
      console.log("뉴스데이터를 가져오는 중 오류발생: ", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNewsData(selectedSection);
  }, [selectedSection, currentPage]);

  if (loading) {
    <div>loading...</div>;
  }

  const filteredNews = () => {
    let filtered = newsData || [];
    if (searchInput) {
      filtered = filtered?.filter(
        (news) =>
          news.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          news.summary.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    return filtered;
  };

  return (
    <div>
      <NewsHeader setSearchInput={setSearchInput} />
      <NewsMenu
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setCurrentPage={setCurrentPage}
        setSearchInput={setSearchInput}
      />
      <NewsArticles
        filteredNews={filteredNews()}
        currentPage={currentPage}
        totalPage={totalPage}
        pageSize={pageSize}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
