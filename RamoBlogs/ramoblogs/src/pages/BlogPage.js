import React from "react";
import Header from "../components/AllPages/Header";
import ArticlePreviewCards from "../components/BlogPage/ArticlePreviewCardsBlogPage";

function BlogPage() {
  return (
    <div className=" min-h-screen bg-gray-800">
      <Header></Header>
      <ArticlePreviewCards></ArticlePreviewCards>
    </div>
  );
}
export default BlogPage;
