/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { increaseVote } from "../utils/api";

export default function VoteButtons({ article, comment }) {
  const [voteCount, setVoteCount] = useState(0);
  const [userVote, setUserVote] = useState(null);
  const [element, setElement] = useState(null);
  useEffect(() => {
    if (article) {
      setVoteCount(article.votes);
      setElement(article);
    } else {
      setVoteCount(comment.votes);
      setElement(comment);
    }
  }, [comment]);

  const handleUpvote = () => {
    if (userVote === "up") {
      setVoteCount(voteCount - 1);
      setUserVote(null);
    } else if (userVote === "down") {
      setVoteCount(voteCount + 2);
      setUserVote("up");
      increaseVote(element, 2);
    } else {
      setVoteCount(voteCount + 1);
      setUserVote("up");
      increaseVote(element, 1);
    }
  };

  const handleDownvote = () => {
    if (userVote === "down") {
      setVoteCount(voteCount + 1);
      setUserVote(null);
    } else if (userVote === "up") {
      setVoteCount(voteCount - 2);
      setUserVote("down");
      increaseVote(element, -2);
    } else {
      setVoteCount(voteCount - 1);
      setUserVote("down");
      increaseVote(element, -1);
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
