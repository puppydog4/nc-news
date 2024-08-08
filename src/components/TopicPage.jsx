/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Spinner from "./Spinner";

export default function ArticlesByTopic({ sort }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  useEffect(() => {
    getArticles(topic, sort).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [topic, sort]);
  return isLoading ? (
    <Spinner />
  ) : (
    articles.map((article) => {
      return <ArticleCard key={article.article_id} article={article} />;
    })
  );
}
