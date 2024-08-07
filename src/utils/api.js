import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://news-project-ebx2.onrender.com/api",
});

export async function getArticles(topic) {
  const {
    data: { articles },
  } = await apiClient.get("/articles", {
    params: {
      topic: topic,
    },
  });
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
  try {
    await apiClient.post(`/articles/${article_id}/comments`, commentData);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteComment(comment_id) {
  await apiClient.delete(`/comments/${comment_id}`);
}

export async function getTopics() {
  const { data } = await apiClient.get("/topics");
  return data.topics;
}
