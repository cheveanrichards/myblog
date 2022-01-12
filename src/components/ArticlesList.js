import React from "react";
import { Link } from "react-router-dom";
const ArticlesList = ({articles}) => {
    return (
      <>
        {articles.map((eacharticle, key) => (
          <Link
            className="article-list-item"
            key={key}
            to={`/article/${eacharticle.name}`}
          >
            <h3>{eacharticle.title}</h3>
            <p>{eacharticle.content[0].substring(0, 150)}...</p>
          </Link>
        ))}
      </>
    );
}
export default ArticlesList;
