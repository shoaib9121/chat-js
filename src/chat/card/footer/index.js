import { useState } from "react";
import DOMPurify from "dompurify";
import { replaceCarriageReturn } from "../../../utils";
import "./style.scss";

const CardFooter = ({ onSubmit }) => {
  const [message, setMessage] = useState([]);

  const handleKeyDown = (e) => {
    let value = e.target.value;
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      value = replaceCarriageReturn(value);
      setMessage(value);
      if (!DOMPurify.sanitize(value).length) {
        return;
      }
      onSubmit && onSubmit(DOMPurify.sanitize(value));
      setMessage("");
      return false;
    }
  };
  return (
    <div className="card-footer">
      <form
        action="#"
        method="post"
        name="chat_form"
        id="chat_form"
        className="form_class"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group">
          <textarea
            name=""
            data-testid="message-input"
            value={message}
            className="form-control type_msg msg_height"
            placeholder="Enter your message..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <div className="input-group-append">
            <span
              data-testid="message-submit"
              className="input-group-text send_btn msg_height"
              onClick={() => {
                if (!DOMPurify.sanitize(message).length) {
                  return;
                }
                onSubmit &&
                  onSubmit(DOMPurify.sanitize(replaceCarriageReturn(message)));
                setMessage("");
              }}
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
