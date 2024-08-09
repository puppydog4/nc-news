/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Spinner from "./Spinner";
import { Box, Typography } from "@mui/material";
import ErrorPage from "./ErrorPage";

export default function ArticlesByTopic({ sort }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sort)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [topic, sort]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {error ? (
        <ErrorPage errorMessage={error.message} />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              alignSelf: "center",
              marginLeft: "10%",
              marginBottom: "1rem",
            }}
            variant="h3"
          >
            T/{topic}
          </Typography>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </Box>
      )}
    </>
  );
}
