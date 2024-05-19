import React, { useEffect, useState } from "react";
import { Menu, Youtube, Search, CircleUserRound } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-1 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <Menu onClick={() => toggleMenuHandler()} className="h-16" />
        <Youtube className="h-16 mx-9" />
      </div>
      <div className="p-4 col-span-10 px-10">
        <div>
          <input
            type="text"
            className="px-5 w-1/2 border border-grey-400 p-2.5 rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestion(true)}
            onBlur={(e) => setShowSuggestion(false)}
          />
          <button className="border border-grey-400 pb-3.5 w-16 pl-4 rounded-r-full bg-gray-200">
            <Search className="text-gray-600 mt-1" />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white ml-2 py-2 px-2 w-[34rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  <Search className=" inline-block mr-2 " />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <CircleUserRound className="h-16 w-9" />
      </div>
    </div>
  );
};

export default Head;
