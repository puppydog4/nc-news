/* eslint-disable react/prop-types */
import { Divider } from "@mui/material";
import ArticleCard from "./ArticleCard";

export default function Articles({ articles }) {
  return articles.map((article, index) => {
    return (
      <>
        <Divider key={index} />
        <ArticleCard key={article.article_id + index} article={article} />
      </>
    );
  });
}
