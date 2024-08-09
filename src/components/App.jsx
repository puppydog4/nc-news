import NavBar from "./Navigation";
import Front from "./Front";
import { Routes, Route } from "react-router-dom";
import Article from "./Article";
import SideBar from "./TopicsBar";
import ArticlesByTopic from "./TopicPage";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

export default function App() {
  const [sort, setSort] = useState(null);
  return (
    <>
      <NavBar setSort={setSort} />
      <SideBar setSort={setSort} />
      <Routes>
        <Route path="/" element={<Front sort={sort} />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/:topic" element={<ArticlesByTopic sort={sort} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
