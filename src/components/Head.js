import React from "react";
import { Menu, Youtube, Search, CircleUserRound } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-1 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <Menu onClick={() => toggleMenuHandler()} className="h-16" />
        <Youtube className="h-16 mx-9" />
      </div>
      <div className="p-4 col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border border-grey-400 p-2.5 rounded-l-full"
          placeholder="Search"
        />
        <button className="border border-grey-400 pb-3.5 w-16 pl-4 rounded-r-full bg-gray-200">
          <Search className="text-gray-600 mt-1" />
        </button>
      </div>
      <div className="col-span-1">
        <CircleUserRound className="h-16 w-9" />
      </div>
    </div>
  );
};

export default Head;
