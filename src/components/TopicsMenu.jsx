/* eslint-disable react/prop-types */
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import Spinner from "./Spinner";

import TopicsButtons from "./TopicsButtons";

const TopicMenu = ({ open, setOpen, setSort }) => {
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

  const DrawerList = <TopicsButtons topics={topics} setSort={setSort} />;

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default TopicMenu;
