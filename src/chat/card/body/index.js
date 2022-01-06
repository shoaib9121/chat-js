import "./style.scss";

const CardBody = ({ chat }) => {
  const renderChatMessage = (item = {}) => {
    return item?.from && item.from === "Visitor"
      ? renderUserMessage(item)
      : renderBotMessage(item);
  };

  const renderUserMessage = (item = {}) => {
    return (
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
        </div>
        <div className="msg_cotainer">
          {item.message}
          <span className="msg_time">{item.datetime}</span>
        </div>
      </div>
    );
  };

  const renderBotMessage = (item = {}) => {
    return (
      <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
          {item.message}
          <span className="msg_time sender">{item.datetime}</span>
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
      {chat.length > 0 &&
        chat.map((item, index) => {
          return <div key={index}> {renderChatMessage(item)} </div>;
        })}
    </div>
  );
};

export default CardBody;
