/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCommentsForArticle } from "../utils/api";
import { Box } from "@mui/material";
import Comment from "./Comment";
import CommentDialog from "./CommentDialog";
import Spinner from "./Spinner";

export default function CommentSection({ id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCommentsForArticle(id).then((response) => setComments(response));
    setIsLoading(false);
  }, [id, newComment]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginLeft: "10%",
        "@media (max-width: 960px)": {
          marginLeft: "0",
        },
      }}
    >
      <CommentDialog id={id} setNewComment={setNewComment} />
      {comments.map((comment, index) => {
        return (
          <Comment
            key={index}
            comment={comment}
            setNewComment={setNewComment}
          />
        );
      })}
    </Box>
  );
}
