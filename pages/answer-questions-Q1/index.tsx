import type { NextPage } from 'next';
import styles from './Q1.module.css';

const AnswerQuestionsQ1: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.nufriendsHeaderFrame}>
        <div className={styles.nufriends}>nufriends</div>
        <img className={styles.robotHeaderImageIcon} alt="Robot Header" src="robot-header-image.png" />
      </div>
      
      {/* Question Textbox */}
      <div className={styles.textBoxWrapper}>
        <div className={styles.textBox}>
          <div className={styles.textBoxChild} />
          <div className={styles.whereAreYou}>Where are you from? Did you enjoy growing up there? Why or why not?</div>
        </div>
      </div>

      {/* Yu Big Speak Section */}
      <div className={styles.yuBigSection}>
        <img className={styles.yuBigIcon} alt="Yu Big" src="Yu-big.svg" />
        <img className={styles.ellipseIcon} alt="Ellipse 16" src="Ellipse 16.svg" />
        <img className={styles.rectangleIcon} alt="Rectangle 49" src="Rectangle 49.svg" />
        <img className={styles.rectangleIcon} alt="Rectangle 50" src="Rectangle 50.svg" />
      </div>

      {/* Question Progress */}
      <div className={styles.questionProgress}>
        <div className={styles.question112}>Question 1/12</div>
      </div>

      {/* Textarea and Mic Section */}
      <div className={styles.textareaWrapper}>
        <div className={styles.textareaBox}>
          <textarea className={styles.textarea} placeholder="Type your answer here..." />
          <img className={styles.micIcon} alt="Mic Icon" src="mic.svg" />
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestionsQ1;
