import "./style.scss";

const CardFooter = () => {
  return (
    <div className="card-footer">
      <div className="input-group">
        <textarea
          name=""
          className="form-control type_msg"
          placeholder="Type your message..."
        ></textarea>
        <div className="input-group-append">
          <span className="input-group-text send_btn">Send</span>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
