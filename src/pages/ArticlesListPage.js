import React from "react";
import Article from "./article-content";
import ArticlesList from '../components/ArticlesList'

const ArticleListPage = () => {
  
    return (
      <>
        <h1> Articles</h1>
        <ArticlesList articles={Article}/>
      </>
    );
};

export default ArticleListPage;
