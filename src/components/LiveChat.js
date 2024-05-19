import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { SendHorizonal } from "lucide-react";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
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

  const formHandler = (e) => {
    e.preventDefault();
    console.log("message");
    dispatch(
      addMessage({
        name: "Yashas",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex  flex-col-reverse">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg"
        onSubmit={formHandler}
      >
        <input
          className="w-3/4 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button type="submit" className="px-2 mx-2 bg-green-100 float-end">
          <SendHorizonal />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
