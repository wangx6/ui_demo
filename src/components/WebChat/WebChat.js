import React, { useState, useEffect, useRef } from "react";
import { BsX, BsCursorFill } from "react-icons/bs";

function ChatModel({ page }) {
  const allowedPages = ["lqe"];
  const [messages, setMessages] = useState([]);
  const [isChatBoxAvailable, setIsChatBoxVisible] = useState(false);
  const [isChatBoxVisible] = useState(false);
  const [isAgentAvailable] = useState(false);
  const [hasChatHistory] = useState(false);

  // POWER SPACE
  useEffect(() => {}, []);

  function isChatAvailable() {
    return isAgentAvailable && allowedPages.includes(page);
  }

  function isChatActive() {
    return hasChatHistory;
  }

  function createMessageRecord(message, type) {
    return {
      id: Math.random().toString(32),
      message,
      dateTime: new Date(),
      type,
    };
  }

  function mockServer() {
    return Array(25)
      .fill()
      .map((e, i) => {
        return {
          id: Math.random().toString(32),
          dateTime: new Date(),
          type: `${i % 2 === 0 ? "a" : "b"}`,
          message: 'this is user speakiing this is user speaking ',
        };
      });
  }

  function fetchChatHistory() {
    return new Promise((resolve, reject) => {
      const messages = mockServer();
      resolve(messages)
    });
  }

  function connect() {
    // connect to the socket server
    // listen to the "message" event
  }

  function onMessageFromAgent(message) {
    addMessage(message, "b");
  }

  function closeChat() {}

  function addMessage(message, type) {
    const record = createMessageRecord(message, type);
    setMessages([...message, record]);
  }

  return {
    messages,
    isAgentAvailable,
    hasChatHistory,
    isChatBoxVisible,
    service: {
      connect,
      fetchChatHistory,
      closeChat,
      addMessage,
      isChatActive,
      isChatAvailable,
      setMessages,
      setIsChatBoxVisible,
    },
  };
}

export default function WebChat() {
  const { messages, isChatBoxVisible, chatService } = ChatModel();
  const [message, setMessage] = useState("");
  const chatBox = useRef(null);

  const refChatService = useRef(chatService);

  useEffect(onRender, []);

  useEffect(() => {
    if (isChatBoxVisible)
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
  }, [messages, isChatBoxVisible]);

  function onRender() {
    refChatService.current.fetchChatHistory.current().then((messages) => {
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
        className={`lqe-wct__main lqe-wct__main__toggle--${
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
              className={`lqe-wct__main__message-list__message lqe-wct__main__message-list__message${chat.user}`}
            >
              <div className="message__dot"></div>
              <div
                className={`message__chatbubble message__chatbubble${chat.user}`}
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
        className={`lqe-wct__open-btn lqe-wct__main__toggle--${
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
