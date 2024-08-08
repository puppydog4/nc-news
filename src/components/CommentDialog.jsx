/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Snackbar } from "@mui/material";
import { postComment } from "../utils/api";
import CheckIcon from "@mui/icons-material/Check";
import Alert from "@mui/material/Alert";
import { userContext } from "./UserContext";

export default function CommentDialog({ id, setNewComment }) {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const { user } = React.useContext(userContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeAlert = () => {
    setAlert(false);
  };

  const CommentButton = ({ user }) => {
    if (user !== undefined) {
      return (
        <Button
          aria-label="write your comment"
          sx={{ margin: "1rem", color: "black" }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          COMMENT
        </Button>
      );
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const comment = formJson.comment;
    const commentData = {
      username: user,
      body: comment,
    };
    await postComment(id, commentData);
    setNewComment((oldState) => !oldState);
    handleClose();
    setAlert(true);
  }

  return (
    <React.Fragment>
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={closeAlert}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          onClose={closeAlert}
          severity="success"
          variant="filled"
        >
          Your comment has been posted!
        </Alert>
      </Snackbar>
      <CommentButton user={user} />
      <Dialog
        sx={{ color: "black" }}
        maxWidth={"sm"}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          autoComplete: "off",
          onSubmit: (event) => {
            handleSubmit(event);
          },
        }}
      >
        <DialogTitle>Comment</DialogTitle>
        <DialogContent>
          <TextField
            aria-label="write your comment here"
            autoFocus
            required
            margin="dense"
            id="name"
            name="comment"
            label="Comment"
            type="Text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "black" }}
            aria-label="Cancel your comment"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{ color: "black" }}
            aria-label="Post your comment"
            type="submit"
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
