/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Typography, Box, List, Divider, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopicsList from "./TopicList";
import { useState } from "react";
import { Chat, Home, NewReleases, TrendingUp } from "@mui/icons-material";
export const StyledListItemButton = styled(ListItemButton)(
  ({ theme, selected }) => ({
    backgroundColor: selected ? "#E5EBEE" : "transparent",
    borderRadius: "20px",
    margin: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  })
);
export default function TopicsButtons({ topics, setSort }) {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleClick = (value) => {
    setSelectedValue(value);
    setSort(value);
  };
  return (
    <Box>
      <List>
        <StyledListItemButton key={4} href="/">
          <Home sx={{ marginRight: "0.5rem" }} /> Home
        </StyledListItemButton>
        <Divider />
        <StyledListItemButton
          key={1}
          selected={selectedValue === null}
          onClick={() => handleClick(null)}
        >
          <NewReleases sx={{ marginRight: "0.5rem" }} /> New
        </StyledListItemButton>
        <StyledListItemButton
          key={2}
          selected={selectedValue === "votes"}
          onClick={() => handleClick("votes")}
        >
          <TrendingUp sx={{ marginRight: "0.5rem" }} /> Popular
        </StyledListItemButton>
        <StyledListItemButton
          key={3}
          selected={selectedValue === "comment_count"}
          onClick={() => handleClick("comment_count")}
        >
          <Chat sx={{ marginRight: "0.5rem" }} /> Most Discussed
        </StyledListItemButton>
      </List>
      <Divider />
      <Typography variant="h6" sx={{ marginLeft: "1rem", marginTop: "1rem" }}>
        Topics
      </Typography>
      <List>
        <TopicsList topics={topics} />
      </List>
    </Box>
  );
}
