import Card from "./card";
import "./style.scss";

const Chat = () => {
  return (
    <div className="chat">
      <h1>JS Chat</h1>
      {/* <div id="chatHolder">
        <div id="chatHistory"></div>
        <div id="liveChat"></div>
      </div> */}
      <div className="cardWrapper">
        <Card />
      </div>
    </div>
  );
};

export default Chat;
