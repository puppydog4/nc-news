import NavBar from "./Navigation";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Spinner from "./Spinner";
import Front from "./Front";
import { Routes, Route } from "react-router-dom";
import Article from "./Article";
import SideBar from "./TopicsBar";
import ArticlesByTopic from "./TopicPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return (
      <>
        <NavBar />
        <SideBar />
        <Spinner />
      </>
    );
  }
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Front articles={articles} />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/:topic" element={<ArticlesByTopic />} />
      </Routes>
    </>
  );
}
