import React from "react";
import Article from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = ({ match }) => {

  fetch('/api/articles/...')


  const name = match.params.name;
  const article = Article.find((somearticle) => somearticle.name === name);
  if (!article) {
   <NotFoundPage/>
  }
  const otherArticles = Article.filter(somearticle => somearticle.name !== name)
  return (
    <>
      <ArticlesList articles={otherArticles} />
      <h1> {article.title}</h1>
      {article.content.map((somedata, key) => (
        <p key={key}>{somedata}</p>
      ))}
    </>
  );
};

export default ArticlePage;
