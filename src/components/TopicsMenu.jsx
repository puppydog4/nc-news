/* eslint-disable react/prop-types */
import { Drawer, Typography, Box, List } from "@mui/material";
import TopicsList from "./TopicList";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import Spinner from "./Spinner";

const TopicMenu = ({ open, setOpen }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ overflow: "auto" }}>
        <Typography variant="h6" sx={{ margin: "1rem" }}>
          Topics
        </Typography>
        <List>
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
