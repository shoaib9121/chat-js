import { useState } from "react";
import Card from "./card";
import { messageInstance, senderEnums } from "../utils";
import "./style.scss";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const handleExternalMessages = () => {
    const tempArr = [...messages];
    tempArr.push(
      messageInstance("New message from outside world", senderEnums.OPERATOR)
    );
    setMessages(tempArr);
  };

  return (
    <div className="chat">
      <div className="pageHeader">
        <h1>Chat with Bot</h1>
        <p>Press button below to drop a message in chat box</p>
        <button onClick={handleExternalMessages}>External Message</button>
      </div>

      <div className="pageBody">
        <h3>What's covered inside</h3>
        <ul>
          <li>
            A basic chat workflow where an end-user submits a message and a bot
            replies with a random response based on 3 different types of
            messages i.e. Greetings, Responses, and Answers
          </li>
          <li>An interactive UI is setup with a bit of animation(s)</li>
          <li>Chat box is sticky to bottom of the page</li>
          <li>
            A chat box can be toggled by pressing either on chat header or on
            chevron icon up/down
          </li>
          <li>History messages are preloaded through mock prefetch</li>
          <li>Message Timestamp is displayed in readable format</li>
          <li>A total Message count be seen in chat header</li>
          <li>
            When a user inputs a message, 3 small animated dots can be seen
            representing if the bot is typing something
          </li>
          <li>
            If user wants to insert line breaks through Shift+Enter keys then
            line breaks are also catered in the UI chat message
          </li>
          <li>
            A message can be sent both by pressing Enter key or hitting the Send
            button
          </li>
          <li>
            When a new message is pushed into the history then chatbox adjusts
            its scroll height position until a newly added message can be
            displayed in the viewport
          </li>
          <li>
            If a message is sent from outside the chat box then a red chat
            header can be seen alongwith unread number of messages count only in
            case if the chat box is collapsed/not opened
          </li>
          <li>
            XSS protection on user input i.e. it filters out any unwanted script
            or vulnerable attacks
          </li>
          <li>UI responsiveness is also covered</li>
          <li>Basic Unit Testing is covered through Jest</li>
        </ul>
        <h3>Tech-stack used</h3>
        <ul>
          <li>
            React, Javascript, Jest, HTML, CSS/SCSS, XSS prtoection with
            Dompurify
          </li>
        </ul>
      </div>

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
