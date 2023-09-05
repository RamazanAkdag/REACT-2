import React from "react";

function ArticlePrewievCard(props) {
  const tags = props.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-3 bg-white flex-shrink-0">
      <img className="w-full h-1/2" src={props.articleImgUrl} alt="" />
      <div className="h-1/2 flex flex-col justify-between">
        <div className=" px-4 py-3 ">
          <h3 className=" font-bold">{props.articleTitle}</h3>
          <p>{props.articleIntroduction}</p>
        </div>

        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            );
          })}
          <a
            className=" bg-gray-900 h-6 w-2/4 px-2 mb-4 text-white flex items-center justify-center rounded text-sm font-semibold  hover:bg-gray-500 transition-all"
            href={props.articleUrl}
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArticlePrewievCard;
