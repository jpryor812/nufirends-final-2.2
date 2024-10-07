import React, { useState, useRef } from 'react';
import styles from "./ChatMessages.module.css";

interface Props {
  onStatementClick: (statement: string) => void;
  slideRight: boolean;
  setIsBubbleClicked: (clicked: boolean) => void;
}

interface Message {
  type: 'sent' | 'received';
  content: string;
}

const SuggestionsContainer: React.FC<Props> = ({ onStatementClick, slideRight, setIsBubbleClicked }) => {
  const [clickedBubble, setClickedBubble] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const suggestionTextBoxRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number, statement: string) => {
    setClickedBubble(index);
    onStatementClick(statement);
    setIsBubbleClicked(true);
  };

  const handleSendClick = () => {
    if (suggestionTextBoxRef.current) {
      const messageContent = suggestionTextBoxRef.current.innerText.trim();
      if (messageContent) { 
        setMessages([...messages, { type: 'sent', content: messageContent }]);
        suggestionTextBoxRef.current.innerText = "Is there anything else you'd like to say?"; 
      }
    }
  };

  const statements = [
    'Ask JPP123 what he does for fun in Worcester',
    'Ask JPP123 what he likes to do for fun',
    'Tell JPP123 why you are staying in Pittsburgh',
    'Something else???'
  ];

  return (
    <div className={`yu_suggestions_container ${slideRight ? "slide-right" : ""}`}>
      <img src="/talk_to_yu.png" alt="talk to Yu suggesting" className="talk_to_yu_suggesting" />
      <div className="statements_container">
        {statements.map((statement, index) => (
          <React.Fragment key={index}>
            <div
              className={`statement_bubble ${clickedBubble === index ? 'selected' : clickedBubble !== null ? 'hidden' : ''}`}
              onClick={() => handleClick(index, statement)}
            >
              {statement}
            </div>

            {clickedBubble === index && (
            <div className="yu_suggestion_full_container">
              <div ref={suggestionTextBoxRef} className={`yu_suggesting_text_box visible`} contentEditable={true}>
                Hey! I'd love to help! What if you said something like this:
                <br /><br /><br />
              </div>
              <div className="button_container">
                <button className="edit_message_button">Edit Message</button>
                <button className="send_message_button" onClick={handleSendClick}>Send Message</button>
                <button className="go_back_button">Go Back</button>
              </div>
              <div className="suggest_changes_container">
                <div className={"suggestion_text_box"} contentEditable={true}>
                  Type your suggestions here...
                </div>
                <button className="suggest_changes_button">Suggest Changes</button>
              </div> 
            </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.messages}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`message_${msg.type}`}>
            {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsContainer;
