import { useEffect, useState } from "react";
import "./style.scss";

const CardFooter = ({ onSubmit }) => {
  const [message, setMessage] = useState([]);

  return (
    <div className="card-footer">
      <form
        action="#"
        method="post"
        name="chat_form"
        id="chat_form"
        className="form_class"
      >
        <div className="input-group">
          <textarea
            name=""
            value={message}
            className="form-control type_msg"
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="input-group-append">
            <span
              className="input-group-text send_btn"
              onClick={() => onSubmit(message)}
            >
              Send
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardFooter;
