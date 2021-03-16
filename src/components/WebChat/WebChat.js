import React, { useState, useEffect, useRef, useMemo } from "react";
import { BsX, BsCursorFill } from "react-icons/bs";
import { messageHistoryGenerator } from "./MessageGeneratorUtil";

const history = {
  messages: messageHistoryGenerator(),
};

export default function WebChat() {
 
  const [chatHistory, setChatHistory] = useState(history.messages);
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);
  const [message, setMessage] = useState('');
  const chatBox = useRef(null);

  useEffect(() => {
    if(isChatBoxVisible)
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
  }, [chatHistory, isChatBoxVisible]);

  const newMessage = () => {

    let users = [
      'usera',
      'userb',
    ];

    let randomUser = Math.floor(Math.random()*2);

    return {
      id: Math.random().toString(32),
      user: users[randomUser],
      message: message,
    }

  }
  
  const onClickToggleChatBox = () => setIsChatBoxVisible(!isChatBoxVisible);

  const onClickAddMessage = () => {
    if(message.trim().length===0) return;
    setChatHistory([...chatHistory, newMessage()]); 
    setMessage('');
  };

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const onKeyUpInput = (event) => {
    const { keyCode } = event;
    if(keyCode === 13 && event.ctrlKey) {
      onClickAddMessage();
    }
  }

  return (
    <div className="lqe-wct">
      <div className={`lqe-wct__main lqe-wct__main__toggle--${isChatBoxVisible ? "show" : "hide"}`}>
        <div className="lqe-wct__main__hdr">
          <p className="lqe-wct__main__hdr_text_s">How may I help you?
          </p>
          <BsX onClick={onClickToggleChatBox}></BsX>
        </div>
        <div ref={chatBox} className="lqe-wct__main__message-list">
          {chatHistory.map((chat) => (
            <div key={chat.id} className={`lqe-wct__message__${chat.user}`}>
              <div className="lqe-wct__message__dot"></div>
              <div className={`lqe-wct__chatbubble__${chat.user}`}>
                {chat.message}
              </div>
            </div>
          ))}
        </div>
        <div className="lqe-wct__message__input__wrap">
          <input 
            onChange={onChangeMessage} 
            onKeyUp={onKeyUpInput} value={message}
            className="lqe-wct__message__input lqe-wct__message__input_s" 
            value={message}  
            placeholder="Enter your message" 
          />
          <button onClick={onClickAddMessage} className="lqe-wct__message__submit-btn">
            <BsCursorFill className="lqe-wct__message__cursor"></BsCursorFill>
          </button>
        </div>
      </div>
      <div className={`lqe-wct__open-btn lqe-wct__main__toggle--${isChatBoxVisible ? "hide" : "show"}`}>
        <p className="lqe-wct__btn_s" onClick={onClickToggleChatBox}>
          Chat with us
        </p>
      </div>
    </div>
  );
}