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
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/:topic" element={<ArticlesByTopic />} />
      </Routes>
    </>
  );
}
