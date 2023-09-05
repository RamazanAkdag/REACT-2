import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

function Article() {
  const { id } = useParams(); // URL parametresini alıyoruz
  const [article, setArticle] = useState(null);
  const [articleAuthor, setArticleAuthor] = useState(null);
  //const url = window.location.href;
  //console.log(url);

  useEffect(() => {
    try {
      const articleResponse = axios
        .get(`http://localhost:5000/api/article/getarticle/${id}`, {
          headers: {
            Authorization:
              "Bearer: " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => res.data.data)
        .then((data) => {
          setArticle(data[0]);
          return data[0];
        })
        .then((data) => {
          axios
            .get(`http://localhost:5000/api/user/getbyid/${data.AUTHORUSERID}`)
            .then((res) => res.data.data)
            .then((data) => setArticleAuthor(data));
        })
        .catch((err) => {
          alert("please login");
          window.location.href = "/";
        });

      /*setArticle(articleData);

      const authorResponse = axios.get(
        `http://localhost:3004/users/${articleData.authorUserId}`
      );
      const authorData = authorResponse.data;
      setArticleAuthor(authorData);*/
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [id]);

  if (!article || !articleAuthor) {
    return (
      <div className=" min-h-screen bg-blue-900 text-white text-2xl flex justify-center gap-7 text-opacity-70 pt-5">
        <p>Article Not Found...</p>
      </div>
    );
  }
  return (
    <div className=" min-h-screen bg-gray-800">
      <div className="min-h-screen w-3/4 container mx-auto h-full bg-gray-900">
        <div className=" container pt-4 flex flex-col gap-y-4 text-center text-white ">
          <h1 className=" text-3xl  font-bold ">{article.ARTICLETITLE}</h1>
          <hr className=" mx-36" />
          <div className="flex mx-auto text-lg">
            <BiUserCircle className=" text-5xl items-center"></BiUserCircle>
            <div className=" flex flex-col">
              <h3>{articleAuthor.FULLNAME}</h3>
              <h2 className=" text-sm">
                {article.CREATIONDATE.slice(0, 10) +
                  "    " +
                  article.CREATIONDATE.slice(11, 16)}
              </h2>
            </div>
          </div>
          <hr className=" mx-36" />
        </div>

        <div className=" w-2/3 mx-auto mt-2 bg-gray-700 border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-3/4 border mx-auto object-cover"
              src={article.ARTICLEIMGURL}
              alt=""
            />
          </a>
          <div className="p-5 px-5">
            <p className="mb-3 font-normal text-white">{article.ARTICLE}</p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
export default Article;
