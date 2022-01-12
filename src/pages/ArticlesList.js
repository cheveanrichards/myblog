import React from "react";

const ArticleList = ({ match }) => {
    const name = match.params.name;
    return (
    <>
            <h1> Hello This is the {name} ArticleList</h1>
    </>
  );
};

export default ArticleList;
