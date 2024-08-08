/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Spinner from "./Spinner";
import { Box, Typography } from "@mui/material";

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
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{ alignSelf: "center", marginLeft: "10%", marginBottom: "1rem" }}
        variant="h3"
      >
        T/{topic}
      </Typography>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </Box>
  );
}
