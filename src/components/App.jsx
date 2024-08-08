import NavBar from "./Navigation";
import Front from "./Front";
import { Routes, Route } from "react-router-dom";
import Article from "./Article";
import SideBar from "./TopicsBar";
import ArticlesByTopic from "./TopicPage";
import { useState } from "react";

export default function App() {
  const [sort, setSort] = useState(null);
  console.log(sort);
  return (
    <>
      <NavBar setSort={setSort} />
      <SideBar setSort={setSort} />
      <Routes>
        <Route path="/" element={<Front sort={sort} />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/:topic" element={<ArticlesByTopic sort={sort} />} />
      </Routes>
    </>
  );
}
