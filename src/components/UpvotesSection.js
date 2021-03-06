import React from "react";

const UpvotesSection = ({articleName, upvotes, setArticleInfo}) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'POST',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
  return (
    <div id="upvotes-section">
          <button onClick={upvoteArticle}>Add Upvotes</button>
      <p>This post have been upvoted {upvotes} times</p>
    </div>
  );
};

export default UpvotesSection;
