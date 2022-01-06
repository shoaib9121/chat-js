import { useEffect, useState } from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";
import { fetchChatHistory } from "../../service";

import "./style.scss";

const Card = () => {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    fetchChatHistory().then((resp) => {
      console.log(resp);
      setChat(resp);
    });
  }, []);

  const handleOnSubmit = (message) => {
    console.log(message);
    const d = new Date();
    let newChatItem = {
      message,
      datetime: new Date(d.setTime(d.getTime() + 4000)).toISOString(),
      from: "Visitor",
    };
    let tempChat = [...chat];
    tempChat.push(newChatItem);
    setChat(tempChat);
  };

  return (
    <div className="card">
      <CardHeader />
      <CardBody chat={chat} />
      <CardFooter onSubmit={handleOnSubmit} />
    </div>
  );
};

export default Card;
