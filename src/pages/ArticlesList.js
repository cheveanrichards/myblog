import React from "react";
import Article from "./article-content";
import { Link } from 'react-router-dom';

const ArticleList = ({  }) => {
  
    return (
      <>
        <h1> Articles</h1>
        {Article.map((eacharticle, key) => (
            <Link key={key} to={`/article/${eacharticle.name}`}>
            <h3>{eacharticle.title}</h3>
          </Link>
        ))}
      </>
    );
};

export default ArticleList;
