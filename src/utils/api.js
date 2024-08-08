import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://news-project-ebx2.onrender.com/api",
});

export async function getArticles(topic, sort) {
  const {
    data: { articles },
  } = await apiClient.get("/articles", {
    params: {
      topic: topic,
      sort_by: sort,
    },
  });
  return articles;
}
export async function getArticlesSorted(sort) {
  const {
    data: { articles },
  } = await apiClient.get("/articles", { params: { sort_by: sort } });
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

export async function increaseVote(element, num) {
  const { article_id, comment_id } = element;
  if (article_id) {
    await apiClient.patch(`/articles/${article_id}`, { inc_votes: num });
  }
  if (comment_id) {
    await apiClient.patch(`/comments/${comment_id}`, { inc_votes: num });
  }
}

export async function deleteComment(comment_id) {
  await apiClient.delete(`/comments/${comment_id}`);
}

export async function getTopics() {
  const { data } = await apiClient.get("/topics");
  return data.topics;
}
