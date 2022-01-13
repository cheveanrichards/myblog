import React, { useState, useEffect } from "react";
import Article from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentList from '../components/CommentsList';
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = Article.find((somearticle) => somearticle.name === name);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    }
    fetchData()
  },[name]);



  if (!article) {
    <NotFoundPage />;
  }
  const otherArticles = Article.filter(
    (somearticle) => somearticle.name !== name
  );
  return (
    <>
      <h1> {article.title}</h1>
      <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
      {article.content.map((somedata, key) => (
        <p key={key}>{somedata}</p>
      ))}
      < CommentList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
