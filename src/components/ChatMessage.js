import { User } from "lucide-react";
import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center py-2 shadow-sm">
      <User className="mr-2" />
      <span className="pr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
