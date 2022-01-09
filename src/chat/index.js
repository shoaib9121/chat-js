import Card from "./card";
import "./style.scss";

const Chat = () => {
  return (
    <div className="chat">
      <h1>JS Chat</h1>
      <div className="cardWrapper">
        <Card />
      </div>
    </div>
  );
};

export default Chat;
