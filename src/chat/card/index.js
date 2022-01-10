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
  messageInstance,
} from "../../utils";
import "./style.scss";

const Card = ({ externalMessages = [], handleMessagesRead }) => {
  const [chatItems, setChatItems] = useState([]);
  const [message, setMessage] = useState([]);
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);
  const [holdBotReply, setHoldBotReply] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isChatCollapsed, setIsChatCollapsed] = useState(true);
  const delay = 2000;

  useEffect(async () => {
    const data = await fetchChatHistory();
    if (externalMessages.length) {
      const mergedData = [...data, ...externalMessages];
      setChatItems(mergedData);
    } else {
      setChatItems(data);
    }
  }, []);

  useEffect(async () => {
    if (externalMessages.length) {
      setUnreadMessageCount(unreadMessageCount + 1);
      const mergedData = [...chatItems, ...externalMessages];
      setChatItems(mergedData);
      handleMessagesRead();
    }
  }, [externalMessages]);

  useEffect(() => {
    setTimeout(() => {
      if (holdBotReply) {
        setIsTyping(true);
        setTimeout(() => {
          submitBotResponse(message);
        }, delay);
      }
    }, 1000);
  }, [chatItems]);

  const handleOnSubmit = (message) => {
    setMessage(message);
    let tempChatItems = [...chatItems];
    tempChatItems.push(messageInstance(message, senderEnums.VISITOR));
    setChatItems(tempChatItems);
    setHoldBotReply(true);
  };

  const submitBotResponse = (message) => {
    let randomMessage;
    randomMessage = getRandomResponse(message);

    // Keep calling message generator until find one
    while (!randomMessage) {
      randomMessage = getRandomResponse(message);
      if (randomMessage) {
        break;
      }
    }

    let tempChatItems = [...chatItems];
    tempChatItems.push(messageInstance(randomMessage, senderEnums.OPERATOR));
    setHoldBotReply(false);
    setChatItems(tempChatItems);
    setIsTyping(false);
  };

  const getRandomResponse = (message) => {
    let randomMessage;
    if (message.indexOf("hello") !== -1 || message.indexOf("hi") !== -1) {
      randomMessage = operatorGreetingChat();
    } else if (message.indexOf("?") !== -1) {
      randomMessage = operatorAnswerChat();
    } else {
      randomMessage = operatorChat();
    }
    return randomMessage;
  };

  return (
    <div className={`card ${isChatCollapsed && "toggle"}`}>
      <CardHeader
        isCollapsed={isChatCollapsed}
        chatLength={chatItems.length}
        unreadMessageCount={unreadMessageCount}
        toggleChat={() => {
          setIsChatCollapsed(!isChatCollapsed);
          handleMessagesRead && handleMessagesRead();
          setUnreadMessageCount(0);
        }}
      />
      <CardBody
        chatItems={chatItems}
        isTyping={isTyping}
        isChatCollapsed={isChatCollapsed}
      />
      <CardFooter onSubmit={handleOnSubmit} />
    </div>
  );
};

export default Card;
