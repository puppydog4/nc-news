/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function VoteButtons({ article }) {
  const [voteCount, setVoteCount] = useState(article.votes);
  const [userVote, setUserVote] = useState(null);

  const handleUpvote = () => {
    if (userVote === "up") {
      setVoteCount(voteCount - 1);
      setUserVote(null);
    } else if (userVote === "down") {
      setVoteCount(voteCount + 2);
      setUserVote("up");
    } else {
      setVoteCount(voteCount + 1);
      setUserVote("up");
    }
  };

  const handleDownvote = () => {
    if (userVote === "down") {
      setVoteCount(voteCount + 1);
      setUserVote(null);
    } else if (userVote === "up") {
      setVoteCount(voteCount - 2);
      setUserVote("down");
    } else {
      setVoteCount(voteCount - 1);
      setUserVote("down");
    }
  };
  const getBackgroundColor = () => {
    if (userVote === "up") return "#DFF8E7";
    if (userVote === "down") return "#F8E5E5";
    return "#E5EBEE";
  };

  return (
    <Box
      sx={{
        backgroundColor: getBackgroundColor(),
        borderRadius: "20px",
        margin: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <IconButton
        aria-label="upvote IconButton"
        onClick={handleUpvote}
        color={userVote === "up" ? "primary" : "default"}
      >
        <ArrowUpward />
      </IconButton>
      <Typography>{voteCount}</Typography>
      <IconButton
        aria-label="downvote IconButton"
        onClick={handleDownvote}
        color={userVote === "down" ? "primary" : "default"}
      >
        <ArrowDownward />
      </IconButton>
    </Box>
  );
}
