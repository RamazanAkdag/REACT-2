import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();
  const { userid } = useParams();

  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(JSON.parse(sessionStorage.getItem("username")));
  });

  return (
    <div className=" bg-gray-900 ">
      <div className="container h-20 mx-auto px-20 flex items-center justify-between">
        <h3 className=" text-white text-3xl">RamoBlogs</h3>
        <nav className="flex gap-x-12">
          <a
            href={"/myarticles/" + userid}
            className=" text-white text-2xl hover:text-red-600  transition-all"
          >
            {username ? username + "'s Articles" : "My Articles"}
          </a>

          <a
            href={"/blog/feed/" + userid}
            className="text-white text-2xl  hover:text-red-600  transition-all"
          >
            Blog
          </a>
        </nav>
      </div>
    </div>
  );
};
export default Header;
