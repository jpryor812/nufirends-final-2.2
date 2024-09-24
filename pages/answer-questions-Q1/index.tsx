import type { NextPage } from 'next';
import styles from './Q1.module.css';

const AnswerQuestionsQ1: NextPage = () => {
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
      <div className={styles.textBoxFrame}>
      <div className={styles.textBox}>
        <div className={styles.textBoxRectangle} />
        <div className={styles.whereAreYou}>Where are you from? Did you enjoy growing up there? Why or why not?</div>
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
      <div className={styles.textBoxComponent}>
        <div className={styles.textBoxFrame}>
          <div className={styles.texthere}>{`<texthere>`}</div>
          <div className={styles.sendMessageIconGroup}>
            <img className={styles.micIcon} alt="" src="mic.svg" />
            <img className={styles.nextButtonIcon} alt="" src="next_button.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestionsQ1;
