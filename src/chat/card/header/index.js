import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./style.scss";

const CardHeader = ({ isCollapsed, chatLength, toggleChat }) => {
  return (
    <div className="card-header msg_head" onClick={toggleChat}>
      <div className="d-flex bd-highlight">
        <div className="img_cont">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img"
          />
          <span className="online_icon"></span>
        </div>
        <div className="user_info">
          <div>
            <span data-testid="header-title">Chat with PowerFront</span>
            <span className="toggle_icon">
              {isCollapsed ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <p>{chatLength} Messages</p>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
