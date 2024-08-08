/* eslint-disable react/prop-types */
import Articles from "./Articles";
import { useState, useEffect } from "react";
import { getArticlesSorted } from "../utils/api";
import Spinner from "./Spinner";

export default function Front({ sort }) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getArticlesSorted(sort).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [sort]);
  if (isLoading) {
    return <Spinner />;
  }
  return <Articles articles={articles} />;
}
