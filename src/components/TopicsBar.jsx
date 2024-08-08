import { Drawer, Typography, Box, List } from "@mui/material";
import TopicsList from "./TopicList";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import Spinner from "./Spinner";

const Sidebar = () => {
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
      <Box sx={{ overflow: "auto" }}>
        <Typography variant="h6" sx={{ margin: "1rem" }}>
          Topics
        </Typography>
        <List>
          <TopicsList topics={topics} />
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
