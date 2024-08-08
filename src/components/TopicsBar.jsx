/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Drawer,
  Typography,
  Box,
  List,
  Divider,
  ListItemButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TopicsList from "./TopicList";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import Spinner from "./Spinner";
import { Chat, Home, NewReleases, TrendingUp } from "@mui/icons-material";
import TopicsButtons from "./TopicsButtons";

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

const Sidebar = ({ setSort }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "15%",
          boxSizing: "border-box",
          marginTop: "4.6rem",
          display: { md: "flex", xs: "none" },
          borderRadius: "25px",
        },
      }}
    >
      <TopicsButtons topics={topics} setSort={setSort} />
    </Drawer>
  );
};

export default Sidebar;
