import React, { useEffect, useState } from "react";

function MyArticlesPageIntro() {
  const [username, setusername] = useState([]);

  useEffect(() => {
    setusername(JSON.parse(sessionStorage.getItem("username")));
  });
  return (
    <div>
      <div className=" flex justify-between items-center container mx-auto">
        <h2 className=" font-bold text-3xl py-6 text-white text-opacity-80 ">
          {username + "'s Articles"}
        </h2>
        <a
          href="/article/add"
          className=" text-white bg-gray-500 p-3 rounded hover:text-gray-900 hover:bg-gray-400 transition-colors "
        >
          Add Article{" "}
        </a>
      </div>

      <hr className=" mx-14" />
    </div>
  );
}
export default MyArticlesPageIntro;
