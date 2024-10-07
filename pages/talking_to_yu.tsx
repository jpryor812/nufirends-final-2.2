import React, { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import ChatMessages from './LoadingChatMessages';

interface Message {
  type: 'sent' | 'received';
  content: string;
}

const MessageRoom: NextPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const textMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialMessages: Message[] = [
      { type: 'received', content: "Hi! You can use this space to ask me questions about yourself. You can ask questions like:" },
      { type: 'received', content: "1. What should I say as a fun fact for me at school?" },
      { type: 'received', content: "2. Is there anything interesting about me I can say at this networking event?" },
      { type: 'received', content: "3. I sit next to this girl in class and I know she likes anime like me, but I can't get myself to start a conversation with her. How can I start a conversation with her about anime?" },
      { type: 'received', content: "These are all just example questions. Use the text box below to ask anything you want!" },
    ];
    setMessages(initialMessages);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setMessage(e.target.innerText);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { type: 'sent', content: message }]);
      setMessage('');
      if (textMessageRef.current) {
        textMessageRef.current.innerText = '';
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Find Five New Friends in Five Minutes with nufriends" />
        <title>nufriends</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="page_container">
        <header className="header">
          <div className="left_header">
            <span className="nufriends_text">nufriends</span>
            <img
              src='/robot-header-image (3).svg'
              alt='robot header image'
              className="robot_header_image"
            />
          </div>
          <div className="right_header">
            <img src='talk_to_yu.png' alt='talk to yu' className="talk_to_yu_header"/>
            <img src='/Duo-emoji.svg' alt='Duo emoji' className='duo_emoji' />
            <img src='/hand-emoji.svg' alt='hand emoji' className='hand_emoji' />
            <img src='/Mail_with_message_emoji.png' alt='mail with message emoji' className='mail_with_message_emoji' />
          </div>
          <div className="person_messaging">
            <img src='talk_to_yu.png' alt='Talk to Yu' className="talk_to_yu_message_icon" />
            <p className="Yu_text_name">Yu</p>
            <img src='/Friend_preview_description.svg' alt='Friend preview description' className='Friend_preview_description' />
          </div>
          <ChatMessages messages={messages} isInitialLoad={false} isBubbleClicked={false} />
          <div className="text_only_container">
            <div className="text_message_container">
              <div className="text_message_box">
                <div
                  className="text_message"
                  contentEditable
                  data-placeholder="Click here to start typing..."
                  ref={textMessageRef}
                  onInput={handleInputChange}
                  onKeyPress={handleKeyPress}
                ></div>
              </div>
              <div className="text_box_buttons">
                <img src='/mic.svg' alt='mic' className='mic_button' />
                <img src='/next_button.svg' alt='next_button' className='text_next_button' onClick={handleSendMessage} />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default MessageRoom;
