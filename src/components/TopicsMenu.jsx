/* eslint-disable react/prop-types */
import { Drawer, Typography, Box, List } from "@mui/material";
import TopicsList from "./TopicList";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

const TopicMenu = ({ open, setOpen }) => {
  const [topics, setTopics] = useState([]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ overflow: "auto" }}>
        <List>
          <Typography variant="h6" sx={{ margin: "1rem" }}>
            Topics
          </Typography>
          <TopicsList topics={topics} />
        </List>
      </Box>
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default TopicMenu;
