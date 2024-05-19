import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { menuClose } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
  }, []);
  return (
    <div className="flex w-full">
      <div className="px-5 flex w-full">
        <div className="pl-10">
          <iframe
            className="rounded-lg"
            width="910"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
