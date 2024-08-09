/* eslint-disable react/prop-types */
import {
  Paper,
  Typography,
  Avatar,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { deleteComment, getUser } from "../utils/api";
import { useContext, useEffect, useState } from "react";
import { userContext } from "./UserContext";
import { Delete } from "@mui/icons-material";
import VoteButtons from "./VoteButtons";

export default function Comment({ comment, setNewComment }) {
  const [commentUser, setCommentUser] = useState("");
  const { user } = useContext(userContext);
  const [event, setEvent] = useState(false);

  useEffect(() => {
    getUser(comment.author).then((response) => setCommentUser(response));
  }, [comment.author]);

  const closeAlert = () => {
    setEvent(false);
  };

  const DeleteButton = ({ user, setEvent, commentUser: { username } }) => {
    if (user === username) {
      return (
        <Button
          sx={{ marginTop: "auto", marginLeft: "auto" }}
          variant="outlined"
          color="error"
          startIcon={<Delete />}
          onClick={async () => {
            await deleteComment(comment.comment_id);
            setNewComment((oldState) => !oldState);
            setEvent(true);
          }}
        >
          Delete
        </Button>
      );
    }
  };

  return (
    <>
      <Snackbar
        open={event}
        autoHideDuration={6000}
        onClose={closeAlert}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert onClose={closeAlert} severity="error" variant="filled">
          Your comment has been deleted!
        </Alert>
      </Snackbar>
      <Paper
        elevation={2}
        sx={{ padding: 2, marginBottom: 2, maxWidth: "60%", minWidth: "60%" }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar
            alt={"Avatr of " + commentUser.username}
            aria-label="user avatar"
            sx={{ marginRight: "1rem" }}
            src={commentUser.avatar_url}
          />
          <Typography fontWeight="bold" variant="body3">
            {commentUser.username}
          </Typography>
        </Box>

        <Typography variant="body2">{comment.body}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <VoteButtons comment={comment} />
          <DeleteButton
            user={user}
            commentUser={commentUser}
            setEvent={setEvent}
          />
        </Box>
      </Paper>
    </>
  );
}
