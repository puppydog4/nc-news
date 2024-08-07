import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Spinner from "./Spinner";

export default function ArticlesByTopic() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  useEffect(() => {
    getArticles(topic).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [topic]);
  return isLoading ? (
    <Spinner />
  ) : (
    articles.map((article) => {
      return <ArticleCard key={article.article_id} article={article} />;
    })
  );
}
