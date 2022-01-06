import "./style.scss";

const CardHeader = () => {
  return (
    <div className="card-header msg_head">
      <div className="d-flex bd-highlight">
        <div className="img_cont">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img"
          />
          <span className="online_icon"></span>
        </div>
        <div className="user_info">
          <span>Chat with PowerFront</span>
          <p>1767 Messages</p>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
