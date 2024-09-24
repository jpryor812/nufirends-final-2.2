import type { NextPage } from 'next';
import { useState } from 'react';
import styles from './Q1.module.css';

const AnswerQuestionsQ1: NextPage = () => {
    const [userAnswer, setUserAnswer] = useState(' ');
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setUserAnswer(event.target.value);
    };
    const handleSubmit = () => {
        console.log('Submitted answer:', userAnswer);
    };
  
  return (
    <div className={styles.answerQuestionsQ1}>
      {/* Header Section */}
      <div className={styles.header}>
      <div className={styles.nufriendsHeaderFrame}>
        <div className={styles.nufriends}>nufriends</div>
        <img className={styles.robotHeaderImageIcon} alt="" src="robot-header-image.svg" />
      </div>
      </div>
      
      {/* Question Textbox */}
        <div className={styles.BigTextBoxFrame}>
          <div className={styles.BigTextBox}>
          <div className={styles.bigtextboxrectangle} />
          <div className={styles.whereareyou}>Where are you from? Did you enjoy growing up there? Why or why not?</div>
          </div>
        </div>
          
      {/* Yu Big Speak Section */}
      <div className={styles.bigYuFrame}>
        <img className={styles.groupYuBigSpeakIcon} alt="" src="Group-Yu-big-speak.svg" />
      </div>

      {/* Question Progress */}
      <div className={styles.questionCounterFrame}>
        <div className={styles.question112}>Question 1/12</div>
      </div>

      {/* Textarea and Mic Section */}
      <div className={styles.smalltextboxcomponent}>
        <div className={styles.smalltextboxframe}>
        <textarea
          className={styles.texthere}
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="Enter your answer here..."
        />
        </div> 
          <div className={styles.sendMessageIconGroup}>
            <img className={styles.micIcon} alt="" src="mic.svg" />
            <button onClick={handleSubmit} className={styles.nextButtonIcon}>
              <img alt="Submit" src="next_button.svg" />
            </button>
          </div>
        </div>
      </div>
  );
};

export default AnswerQuestionsQ1;
