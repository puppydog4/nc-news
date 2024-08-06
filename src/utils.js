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
  return data.article[0];
}

export async function getCommentsForArticle(id) {
  const { data } = await apiClient.get(`/articles/${id}/comments`);
  return data.comments;
}

export async function getUser(username) {
  const { data } = await apiClient.get(`/users/${username}`);
  return data.user;
}

export async function postComment(article_id, commentData) {
  console.log(commentData);
  try {
    const newComment = await apiClient.post(
      `/articles/${article_id}/comments`,
      commentData
    );
    console.log(newComment);
  } catch (error) {
    console.log(error);
  }
}
