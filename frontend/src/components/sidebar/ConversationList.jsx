import React from "react";
import Conversation from "./Conversation.jsx";
import useGetConversation from "../../hooks/useGetConversation.js";
import { getRandomEmoji } from "../../utils/emojis.js";

const ConversationList = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <div className="flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoij={getRandomEmoji()}
          lastIdx={index === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default ConversationList;
