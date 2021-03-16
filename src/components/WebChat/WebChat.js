import React, { useState, useEffect, useRef, useMemo } from "react";
import { BsX, BsCursorFill } from "react-icons/bs";
import { messageHistoryGenerator } from "./MessageGeneratorUtil";

import "./WebChat.css";

export default function WebChat() {
    const chatHistory = useMemo(() => messageHistoryGenerator(), []);

    const [isVisible, setIsVisible] = useState(false);

    const notVisible = () => setIsVisible(false);
    const visible = () => setIsVisible(true);

    const onClickMessageSubmit = (event) => {};

    const onChangeMessage = (event) => {};

    return (
        <div className="lqe-webchat-container">
            <div className="lqe-webchat-bar">
                <p className="lqe-webchat-bar-spacing" onClick={visible}>
                    Chat with us
                </p>
                <BsX
                    className={`lqe-webchat-toggle--${
                        isVisible ? "show" : "hide"
                    }`}
                    onClick={notVisible}
                ></BsX>
            </div>

            <div
                id="lqe-webchat-window"
                className={`lqe-webchat-window lqe-webchat-toggle--${
                    isVisible ? "show" : "hide"
                }`}
            >
                {chatHistory.map((chat) => (
                    <div
                        key={chat.id}
                        className={`lqe-webchat-message-${chat.user}`}
                    >
                        <div className={`lqe-dot-${chat.user}`}></div>
                        <div className={`lqe-webchat-chatbubble-${chat.user}`}>
                            {chat.message}
                        </div>
                    </div>
                ))}
            </div>

            <div
                className={`lqe-webchat-message-submit lqe-webchat-toggle--${
                    isVisible ? "show" : "hide"
                }`}
            >
                <input
                    className="lqe-message-input"
                    onChange={onChangeMessage}
                    value={chatHistory.message}
                    placeholder="Enter your message"
                />
                <button
                    className="lqe-message-submit-btn"
                    onClick={onClickMessageSubmit}
                >
                    <BsCursorFill className="lqe-send-message"></BsCursorFill>
                </button>
            </div>
        </div>
    );
}
