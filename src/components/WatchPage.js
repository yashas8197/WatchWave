import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { menuClose } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
  }, []);
  return <div>WatchPage</div>;
};

export default WatchPage;
