import "./style.scss";

const Chat = () => {
  return (
    <div className="Chat">
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

      <div className="card">
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
        <div className="card-body msg_card_body">
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
            </div>
            <div className="msg_cotainer">
              Hi, how are you samim?
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Hi Khalid i am good tnx how about you?
              <span className="msg_time_send">8:55 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
            </div>
            <div className="msg_cotainer">
              I am good too, thank you for your chat template
              <span className="msg_time">9:00 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              You are welcome
              <span className="msg_time_send">9:05 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
            </div>
            <div className="msg_cotainer">
              I am looking for your next templates
              <span className="msg_time">9:07 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Ok, thank you have a good day
              <span className="msg_time_send">9:10 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
            </div>
            <div className="msg_cotainer">
              Bye, see you
              <span className="msg_time">9:12 AM, Today</span>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Chat;
