import { useEffect, useState } from "react";
import { getArticleById } from "./utils";
import CommentSection from "./CommentsSection";
import { Box } from "@mui/material";
import FullArticleCard from "./FullArticleCard";

export default function Article() {
  const [article, setArticle] = useState([]);
  const articleId = window.location.href.split("/").pop();
  useEffect(() => {
    getArticleById(articleId).then((response) => {
      setArticle(response);
    });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <FullArticleCard article={article} />

      <CommentSection id={articleId} />
    </Box>
  );
}
