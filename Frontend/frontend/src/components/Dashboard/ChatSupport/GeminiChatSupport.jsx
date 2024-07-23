import React, { useState } from "react";
import axios from "axios";
import "./GeminiChatSupport.css";
import { BiSend } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const GeminiChatSupport = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      const currentMessage = input;
      setInput("");

      setMessages([...messages, { text: currentMessage, sender: "user" }]);

      const { data } = await axios.post(
        "http://localhost:3000/api/chat/gemini",
        { prompt: currentMessage },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.response, sender: "bot" },
      ]);
    } catch (error) {
      console.log("error is", error);
    }
  };

  return (
    <div className="main-container">
      <h5>
        Ask anything here...
        <div className="rightside-corner" onClick={onClose}>
          <div className="icon-design">
            <ImCancelCircle />
          </div>
        </div>
      </h5>

      <div className="chat-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "sending" : "received-message"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="sending-chat">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={clickHandler}>
          <BiSend />
        </button>
      </div>
    </div>
  );
};

export default GeminiChatSupport;
