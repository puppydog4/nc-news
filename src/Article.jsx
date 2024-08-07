import { useEffect, useState } from "react";
import { getArticleById } from "./utils";
import CommentSection from "./CommentsSection";
import { Box } from "@mui/material";
import FullArticleCard from "./FullArticleCard";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

export default function Article() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    getArticleById(id).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, [id]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
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
  );
}
