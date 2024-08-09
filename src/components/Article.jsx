import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import CommentSection from "./CommentsSection";
import { Box } from "@mui/material";
import FullArticleCard from "./FullArticleCard";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";

export default function Article() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getArticleById(id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [id]);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {error ? (
        <ErrorPage errorMessage={error.message} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FullArticleCard article={article} />

          <CommentSection id={id} />
        </Box>
      )}
    </>
  );
}
