import { useEffect } from "react";
import { timeAgo, senderEnums } from "../../../utils";
import "./style.scss";

const CardBody = ({ chatItems, isTyping = false }) => {
  const renderChatMessage = (item = {}) => {
    return item?.from && item.from === senderEnums.VISITOR
      ? renderUserMessage(item)
      : renderBotMessage(item);
  };

  useEffect(() => {
    document.querySelector(".card-body").scrollTop =
      document.querySelector(".card-body").scrollHeight;
  }, [chatItems]);

  const renderUserMessage = (item = {}) => {
    return (
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
        </div>
        <div className="msg msg_cotainer">
          {item.message}
          <span className="msg_time">{timeAgo(item.datetime)}</span>
        </div>
      </div>
    );
  };

  const renderBotMessage = (item = {}) => {
    return (
      <div className="d-flex justify-content-end mb-4">
        <div className="msg msg_cotainer_send">
          {item.message}
          <span className="msg_time sender">{timeAgo(item.datetime)}</span>
        </div>
        <div className="img_cont_msg">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="card-body msg_card_body">
      {chatItems.length > 0 &&
        chatItems.map((item, index) => {
          return <div key={index}> {renderChatMessage(item)} </div>;
        })}
      {isTyping && <div className="is_typing">Operator Typing...</div>}
    </div>
  );
};

export default CardBody;
