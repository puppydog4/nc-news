/* eslint-disable react/prop-types */
import ArticleCard from "./ArticleCard";

export default function Articles({ articles }) {
  return articles.map((article) => {
    return <ArticleCard key={article.article_id} article={article} />;
  });
}
