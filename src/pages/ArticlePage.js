import React from "react";
import Article from './article-content'

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = Article.find(somearticle => somearticle.name === name);
  if (!article) {
    return (<h1>Article Does Not Exist!</h1>)
  }
  return (
    <>
      <h1> {article.title}</h1>
      {article.content.map((somedata, key) => (<p key={key}>{somedata}</p>))}
    </>
  );
};

export default ArticlePage;