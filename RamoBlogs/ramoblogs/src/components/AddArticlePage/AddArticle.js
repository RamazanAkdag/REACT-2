import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddArticle() {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleImgUrl, setArticleImgUrl] = useState("");
  const [article, setArticle] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");

  const addArticle = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const articleUrl = `/article/${id}`;
    const tags = [tag1, tag2, tag3];

    axios
      .post(
        "http://localhost:5000/api/article/add",
        {
          id,
          articleUrl,
          articleTitle,
          article,
          articleImgUrl,
          tags,
        },
        {
          headers: {
            Authorization:
              "Bearer: " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        alert("Article Added Successfully");
        window.location.href = "/myarticles/undefined";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-gray-800 min-h-screen">
      <div className="min-h-screen w-3/4 container mx-auto h-full bg-gray-900">
        <h2 className=" text-white font-semibold text-xl text-center">
          {" "}
          Add Article
        </h2>
        <hr className=" mx-36 my-4" />

        <form
          onSubmit={addArticle}
          className=" bg-gray-400 w-2/4 rounded-lg p-2 flex flex-col gap-y-3 mx-auto"
        >
          <label className=" flex-1 relative group block">
            <input
              type="text"
              onChange={(e) => {
                setArticleTitle(e.target.value);
              }}
              required
              className=" h-14 bg-gray-700 text-white px-2 border-2 border-gray-200 rounded w-full transition-colors  focus:border-red-900 outline-none peer text-sm"
            />
            <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-200  transition-all peer-focus:h-7 peer-focus:text-red-500  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
              Add Title
            </span>
          </label>
          <label className=" flex-1 relative group block">
            <input
              type="text"
              onChange={(e) => {
                setArticleImgUrl(e.target.value);
              }}
              required
              className=" h-14 bg-gray-700 text-white px-2 border-2 border-gray-200 rounded w-full transition-colors  focus:border-red-900 outline-none peer text-sm"
            />
            <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-200  transition-all peer-focus:h-7 peer-focus:text-red-500  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
              Add Image Url
            </span>
          </label>
          <label className="flex-1 relative group block">
            <textarea
              onChange={(e) => {
                setArticle(e.target.value);
              }}
              required
              className=" min-h-screen bg-gray-700 text-white px-2 py-5 border-2 border-gray-200 rounded w-full transition-colors focus:border-red-900 outline-none peer text-sm resize-none"
              rows="4"
            ></textarea>
            <span className=" absolute  top-0 left-0 h-full py-2 px-2 flex  text-xl text-gray-200 transition-all peer-focus:h-7 peer-focus:text-red-500 peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
              Article
            </span>
          </label>
          <hr></hr>
          <div className=" mx-auto flex justify-between gap-x-2">
            <label className=" flex-1 relative group block">
              <input
                type="text"
                onChange={(e) => {
                  setTag1(e.target.value);
                }}
                required
                className=" h-14 bg-gray-700 text-white px-2 border-2 border-gray-200 rounded  transition-colors  focus:border-red-900 outline-none peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-200  transition-all peer-focus:h-7 peer-focus:text-red-500  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Add Tag
              </span>
            </label>
            <label className=" flex-1 relative group block">
              <input
                type="text"
                onChange={(e) => {
                  setTag2(e.target.value);
                }}
                required
                className=" h-14 bg-gray-700 text-white px-2 border-2 border-gray-200 rounded  transition-colors  focus:border-red-900 outline-none peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-200  transition-all peer-focus:h-7 peer-focus:text-red-500  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Add Tag
              </span>
            </label>
            <label className=" flex-1 relative group block">
              <input
                type="text"
                onChange={(e) => {
                  setTag3(e.target.value);
                }}
                required
                className=" h-14 bg-gray-700 text-white px-2 border-2 border-gray-200 rounded  transition-colors  focus:border-red-900 outline-none peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-200  transition-all peer-focus:h-7 peer-focus:text-red-500  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Add Tag
              </span>
            </label>
          </div>
          <hr />
          <button
            type="submit"
            className=" bg-gray-900 rounded h-11 mb-3 text-white hover:bg-black hover:text-red-600 transition"
          >
            Add Article
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddArticle;
