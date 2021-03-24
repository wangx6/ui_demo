import { useState, useEffect } from "react";

function WebChatModel({ page }) {
  // STATE SPACE
  const allowedPages = ["lqe"];
  const [messages, setMessages] = useState([]);
  const [isChatBoxAvailable, setIsChatBoxAvailable] = useState(false);
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);
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

  function mockServer() {
    return Array(25)
      .fill()
      .map((e, i) => {
        return {
          id: Math.random().toString(32),
          dateTime: new Date(),
          type: `${i % 2 === 0 ? "a" : "b"}`,
          message: "this is user speaking this is user speaking ",
        };
      });
  }

  function fetchChatHistory() {
    return new Promise((resolve, reject) => {
      const messages = mockServer();
      resolve(messages);
    });
  }

  function connect() {
    // connect to the socket server
    // listen to the "message" event
    let message = "test message";
    onMessageFromAgent(message, "b");
  }

  function onMessageFromAgent(message) {
    addMessage(message, "a");
  }

  function closeChat() {}

  function createMessageRecord(message, type) {
    return {
      id: Math.random().toString(32),
      message,
      dateTime: new Date(),
      type,
    };
  }

  function addMessage(message, type) {
    const record = createMessageRecord(message, type);
    setMessages([...messages, record]);
  }

  // API SPACES
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

export default WebChatModel;
