import React from "react";
import Button from "./Button";

const list = [
  "name",
  "Popular",
  "Trending",
  "New",
  "Featured",
  "Top Rated",
  "Recommended",
  "Recent",
  "Favorites",
  "Saved",
  "Gaming",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
