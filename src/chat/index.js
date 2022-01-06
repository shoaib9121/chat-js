import Card from "./card";
import "./style.scss";

const Chat = () => {
  return (
    <div className="chat">
      <h1>JS Chat</h1>
      <div id="chatHolder">
        <div id="chatHistory"></div>
        <div id="liveChat"></div>
      </div>

      {/* <form
        action="#"
        method="post"
        name="chat_form"
        id="chat_form"
        className="form_class"
      ></form>
      <textarea
        id="chatInput"
        placeholder="Type your question here..."
      ></textarea>
      <input
        id="chatSubmit"
        type="button"
        value="SEND"
        onclick="submit()"
      ></input> */}
      <Card />
    </div>
  );
};

export default Chat;
