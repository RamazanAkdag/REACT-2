import React from "react";
import Header from "../components/AllPages/Header";
import HeroSection from "../components/FirstPageComponents/HeroSection";
import ArticlePreviewCards from "../components/FirstPageComponents/ArticlePreviewCards";
function FirstPage() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>

      <ArticlePreviewCards></ArticlePreviewCards>
    </div>
  );
}

export default FirstPage;
