/* eslint-disable react/prop-types */
import { Paper, Typography, Avatar, Box, Button } from "@mui/material";
import { getUser } from "./utils";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { useEffect, useState } from "react";
export default function Comment({ comment }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    getUser(comment.author).then((response) => setUser(response));
  }, [comment.author]);
  return (
    <Paper
      elevation={2}
      sx={{ padding: 2, marginBottom: 2, maxWidth: "60%", minWidth: "60%" }}
    >
      <Box sx={{ display: "flex" }}>
        <Avatar sx={{ marginRight: "1rem" }} src={user.avatar_url} />
        <Typography varian="body3" color="orangered">
          {user.username}
        </Typography>
      </Box>

      <Typography variant="body2">{comment.body}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button>
          <ArrowUpward />
        </Button>
        <Typography sx={{ margin: "1.5rem" }}>{comment.votes}</Typography>
        <Button>
          <ArrowDownward />
        </Button>
      </Box>
    </Paper>
  );
}
