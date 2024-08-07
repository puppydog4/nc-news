/* eslint-disable react/prop-types */
import { Divider } from "@mui/material";
import ArticleCard from "./ArticleCard";

export default function Articles({ articles }) {
  return articles.map((article) => {
    return (
      <>
        <Divider />
        <ArticleCard key={article.article_id} article={article} />
      </>
    );
  });
}
