import ArticlePage from "./pages/ArticlePage.js";
import BlogPage from "./pages/BlogPage.js";
import FirstPage from "./pages/FirstPage.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyArticlesPage from "./pages/MyArticlesPage.js";
import AddArticlePage from "./pages/AddArticlePage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/article/add"
            element={<AddArticlePage></AddArticlePage>}
          ></Route>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/blog/feed/:userid" element={<BlogPage />}></Route>
          <Route path="/article/:id" element={<ArticlePage />}></Route>
          <Route
            path="/myarticles/:userid"
            element={<MyArticlesPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
