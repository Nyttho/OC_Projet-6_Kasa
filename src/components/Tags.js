import React from "react";

const Tags = ({ tags }) => {
  const tagList = tags.map((tag, index) => (
    <li key={index} className="tag">
      {tag}
    </li>
  ));
  return (
    <div>
      <ul>{tagList}</ul>
    </div>
  );
};

export default Tags;
