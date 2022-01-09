import { useEffect, useState } from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";
import { fetchChatHistory } from "../../services";
import {
  senderEnums,
  operatorGreetingChat,
  operatorAnswerChat,
  operatorChat,
} from "../../utils";
import "./style.scss";

const Card = () => {
  const [chatItems, setChatItems] = useState([]);
  const [message, setMessage] = useState([]);
  const [holdBotReply, setHoldBotReply] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const delay = 2000;

  useEffect(async () => {
    const resp = await fetchChatHistory();
    setChatItems(resp);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (holdBotReply) {
        setIsTyping(true);
        setTimeout(() => {
          submitBotResponse(message);
        }, delay);
      }
    }, delay);
  }, [chatItems]);

  const handleOnSubmit = (message) => {
    console.log(message);
    setMessage(message);
    let tempChatItems = [...chatItems];
    tempChatItems.push(messageInstance(message, senderEnums.VISITOR));
    setChatItems(tempChatItems);
    setHoldBotReply(true);
  };

  const submitBotResponse = (message) => {
    let randomMessage;
    if (message.indexOf("hello") !== -1 || message.indexOf("hi") !== -1) {
      randomMessage = operatorGreetingChat();
    } else if (message.indexOf("?") !== -1) {
      randomMessage = operatorAnswerChat();
    } else {
      randomMessage = operatorChat();
    }

    let tempChatItems = [...chatItems];
    tempChatItems.push(messageInstance(randomMessage, senderEnums.OPERATOR));
    setHoldBotReply(false);
    setChatItems(tempChatItems);
    setIsTyping(false);
  };

  const messageInstance = (message, sender) => {
    const d = new Date();
    return {
      message,
      datetime: new Date(d.setTime(d.getTime() + 4000)).toISOString(),
      from: sender,
    };
  };

  return (
    <div className={`card ${isChatOpen && "toggle"}`}>
      <CardHeader
        chatLength={chatItems.length}
        toggleChat={() => setIsChatOpen(!isChatOpen)}
      />
      <CardBody chatItems={chatItems} isTyping={isTyping} />
      <CardFooter onSubmit={handleOnSubmit} />
    </div>
  );
};

export default Card;
