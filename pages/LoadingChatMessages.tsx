import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatMessages.module.css";

interface Message {
  type: "sent" | "received";
  content: string;
}

interface ChatMessagesProps {
  messages: Message[];
  isInitialLoad: boolean;
  isBubbleClicked: boolean; // New prop
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isInitialLoad,
  isBubbleClicked,
}) => {
  const messagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let delay = 0;

    messagesRef.current.forEach((message, index) => {
      if (message) {
        setTimeout(() => {
          message.classList.add(styles.show);
        }, delay);
        delay += isInitialLoad ? 750 : 0;
      }
    });

    if (!isInitialLoad && endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isInitialLoad]);

  return (
    <div
      className={`${styles.message_container} ${
        isBubbleClicked ? styles.halfHeight : ""
      }`}
    >
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={styles[`message_${message.type}` as keyof typeof styles]}
            ref={(el) => {
              messagesRef.current[index] = el;
            }}
          >
            {message.content}
          </div>
        ))}
        <div ref={endOfMessagesRef}></div>
      </div>
    </div>
  );
};

export default ChatMessages;
