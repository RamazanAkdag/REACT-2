import React, { useEffect, useState } from "react";

import ArticlePrewievCard from "../FirstPageComponents/ArticlePreviewCard";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import MyArticlesPageIntro from "./MyArticlesPageIntro";
import { useParams } from "react-router-dom";

function ArticlePreviewCardsMyArticlesPage() {
  const { userid } = useParams();
  const [articles, setArticles] = useState([]);
  const [filteredList, setFilteredList] = new useState([]);

  useEffect(() => {
    const response = axios
      .get("http://localhost:5000/api/article/cards/users/getall", {
        headers: {
          Authorization: "Bearer: " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => res.data.data)
      .then((data) => {
        setArticles(data);
        setFilteredList(data);
      })
      .catch((res) => {
        alert("please login");
        sessionStorage.removeItem("username");
        window.location.href = "/";
      });
  }, []);

  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();

    const updatedList = articles.filter((item) => {
      return (
        item.ARTICLETITLE.toLowerCase().includes(query) ||
        item.ARTICLEINTRODUCTION.toLowerCase().includes(query) ||
        item.TAGS.split(",").some((tag) => tag.toLowerCase().includes(query))
      );
    });

    setFilteredList(updatedList);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col ">
      <hr />
      <div className="flex flex-col gap-y-2 ">
        <MyArticlesPageIntro></MyArticlesPageIntro>
        <form className="container  mx-auto my-3">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-500 border-gray-600 placeholder-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Articles..."
              onChange={filterBySearch}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-gray-900 font-medium rounded-lg text-sm px-4 py-2 hover:bg-black focus:ring-blue-800 transition-all"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className=" container mx-auto grid grid-cols-4 gap-4">
        {filteredList.length ? (
          filteredList.map((article) => {
            const {
              ID,
              AUTHORUSERID,
              ARTICLETITLE,
              ARTICLEINTRODUCTION,
              ARTICLEIMGURL,
              ARTICLEURL,
              TAGS,
            } = article;
            return (
              <ArticlePrewievCard
                key={ID}
                authorUserId={AUTHORUSERID}
                articleTitle={ARTICLETITLE}
                articleIntroduction={ARTICLEINTRODUCTION}
                articleImgUrl={ARTICLEIMGURL}
                articleUrl={ARTICLEURL}
                tags={TAGS}
              />
            );
          })
        ) : (
          <div className=" text-white text-2xl flex gap-7  text-opacity-70 mt-5">
            <FaSearch></FaSearch>Article not found...
          </div>
        )}
      </div>
    </div>
  );
}
export default ArticlePreviewCardsMyArticlesPage;
