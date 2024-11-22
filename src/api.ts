import axios from "axios";

const baseURL = "https://api-v2.deepsearch.com";
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

export interface NewsArticle {
  id: string;
  publisher: string;
  image_url: string;
  title: string;
  summary: string;
  published_at: string;
}
export interface NewsDataResponse {
  data: NewsArticle[];
  page: number;
  total_pages: number;
  page_size: number;
}

export const getSamsungNewsData = async (
  section: string,
  currentPage: number
): Promise<NewsDataResponse | null> => {
  try {
    const response = await api.get(`/v1/articles/${section}`, {
      params: {
        company_name: "삼성전자",
        date_from: "2024-07-01",
        date_to: "2024-12-31",
        page: currentPage,
      },
    });
    return response.data;
  } catch (e) {
    console.log("삼성전자에 관한 뉴스데이터를 받아오는 중 오류발생: ", e);
    return null;
  }
};
