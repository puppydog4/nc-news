import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://news-project-ebx2.onrender.com/api",
});

export async function getArticles() {
  const {
    data: { articles },
  } = await apiClient.get("/articles");
  return articles;
}

export async function getArticleById(id) {
  const { data } = await apiClient.get(`/articles/${id}`);
  return data;
}
