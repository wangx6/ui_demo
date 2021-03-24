import React, { useState, useEffect, useRef } from "react";
import { BsX, BsCursorFill } from "react-icons/bs";
import WebChatModel from '../../models/WebChatModel/WebChatModel';

export default function WebChat() {
  const { messages, isChatBoxVisible, service: chatService } = WebChatModel({page: 'lqe'});
  const [message, setMessage] = useState("");
  const chatBox = useRef(null);

  const refChatService = useRef(chatService);

  useEffect(onRender, []);

  useEffect(() => {
    chatBox.current.scrollTop = chatBox.current.scrollHeight;
  }, [messages]);

  function onRender() {
    refChatService.current.fetchChatHistory().then((messages) => {
      refChatService.current.setMessages(messages);
    });
  }

  const onClickClose = () => {
    chatService.setIsChatBoxVisible(false);
  };

  const onClickOpen = () => {
    chatService.setIsChatBoxVisible(true);
  };

  const onClickAddMessage = () => {
    if (message.trim().length === 0) return;
    chatService.addMessage(message, 'a');
  };

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const onKeyUpInput = (event) => {
    const { keyCode } = event;
    if (keyCode === 13 && event.ctrlKey) {
      onClickAddMessage();
    }
  };

  return (
    <div className="lqe-wct">
      <div
        className={`lqe-wct__main lqe-wct__toggle--${
          isChatBoxVisible ? "show" : "hide"
        }`}
      >
        <div className="lqe-wct__main__hdr">
          <p className="lqe-wct__main__hdr__text__s">How may I help you?</p>
          <BsX
            className="lqe-wct__main__hdr__x__icon"
            onClick={onClickClose}
          ></BsX>
        </div>
        <div ref={chatBox} className="lqe-wct__main__message-list">
          {messages.map((chat) => (
            <div
              key={chat.id}
              className={`lqe-wct__main__message-list__message lqe-wct__main__message-list__message${chat.type}`}
            >
              <div className="message__dot"></div>
              <div
                className={`message__chatbubble message__chatbubble${chat.type}`}
              >
                {chat.message}
              </div>
            </div>
          ))}
        </div>
        <div className="lqe-wct__message__input__wrap">
          <input
            onChange={onChangeMessage}
            onKeyUp={onKeyUpInput}
            value={message}
            className="lqe-wct__message__input lqe-wct__message__input_s"
            value={message}
            placeholder="Enter your message"
          />
          <button
            onClick={onClickAddMessage}
            className="lqe-wct__message__submit-btn"
          >
            <BsCursorFill className="lqe-wct__message__cursor"></BsCursorFill>
          </button>
        </div>
      </div>
      <div
        className={`lqe-wct__open-btn lqe-wct__toggle--${
          isChatBoxVisible ? "hide" : "show"
        }`}
      >
        <p className="lqe-wct__btn_s" onClick={onClickOpen}>
          Chat with us
        </p>
      </div>
    </div>
  );
}
