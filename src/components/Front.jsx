/* eslint-disable react/prop-types */
import Articles from "./Articles";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import Spinner from "./Spinner";

export default function Front() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  return <Articles articles={articles} />;
}
