import React, { useState, useEffect, useRef } from "react";
import { BsX, BsCursorFill } from "react-icons/bs";
import { messageHistoryGenerator } from "./MessageGeneratorUtil";

import "./WebChat.css";

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

    <div className="webchat-container">

      <div className={`webchat-panel-inner webchat-toggle--${isChatBoxVisible ? "show" : "hide"}`}>

        <div className="webchat-bar">
          <p className="webchat-bar-spacing">How may we help you?</p>
          <BsX onClick={onClickToggleChatBox}></BsX>
        </div>

        <div id="webchat-window" ref={chatBox} className="webchat-window">
          {chatHistory.map((chat) => (
            <div key={chat.id} className={`webchat-message-${chat.user}`}>
              <div className="webchat-dot"></div>
              <div className={`webchat-chatbubble-${chat.user}`}>
                {chat.message}
              </div>
            </div>
          ))}
        </div>

        <div className="webchat-message-submit">
          <input 
            onChange={onChangeMessage} 
            onKeyUp={onKeyUpInput} value={message}
            className="message-input" 
            value={message}  
            placeholder="Enter your message" 
          />
          <button onClick={onClickAddMessage} className="message-submit__btn">
            <BsCursorFill className="send-message"></BsCursorFill>
          </button>
        </div>

      </div>

      <div className={`webchat-open__btn webchat-toggle--${isChatBoxVisible ? "hide" : "show"}`}>
        <p className="webchat-btn-spacing" onClick={onClickToggleChatBox}>
          Chat with us
        </p>
      </div>

    </div>
  );
}