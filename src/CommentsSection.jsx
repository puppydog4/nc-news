/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCommentsForArticle } from "./utils";
import { Box } from "@mui/material";
import Comment from "./Comment";
import CommentDIalog from "./CommentDialog";

export default function CommentSection({ id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);
  useEffect(() => {
    getCommentsForArticle(id).then((response) => setComments(response));
  }, [id, newComment]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CommentDIalog id={id} setNewComment={setNewComment} />
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </Box>
  );
}
