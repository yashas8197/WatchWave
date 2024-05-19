import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API call");

      dispatch(
        addMessage({
          name: "yashas" + Math.random().toFixed(1) * 1000,
          message: "LIVE API POLLING🙏🙏🙏🙏🙏",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex  flex-col-reverse">
      {chatMessage.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
