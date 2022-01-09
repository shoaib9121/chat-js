import { useState } from "react";
import Card from "./card";
import { messageInstance, senderEnums } from "../utils";
import "./style.scss";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const handleExternalMessages = () => {
    const tempArr = [...messages];
    tempArr.push(
      messageInstance("Message from outside world", senderEnums.OPERATOR)
    );
    setMessages(tempArr);
  };

  return (
    <div className="chat">
      <h1>Chat with PowerFront</h1>
      <button onClick={handleExternalMessages}>External Message</button>
      <div className="cardWrapper">
        <Card
          externalMessages={messages}
          handleMessagesRead={() => setMessages([])}
        />
      </div>
    </div>
  );
};

export default Chat;
