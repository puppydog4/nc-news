import NavBar from "./Navigation";
import { useEffect, useState } from "react";
import { getArticles } from "./utils";
import Spinner from "./Spinner";
import Front from "./Front";
import { Routes, Route } from "react-router-dom";
import Article from "./Article";

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
        <Spinner />
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Front articles={articles} />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  );
}
