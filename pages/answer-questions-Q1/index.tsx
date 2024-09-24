import type { NextPage } from 'next';
import styles from './Q1.module.css';

const AnswerQuestionsQ1: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.frameDiv}>
        <div className={styles.nufriendsHeaderFrame}>
          <div className={styles.nufriends}>nufriends</div>
          <img className={styles.robotHeaderImageIcon} alt="Robot Header" src="robot-header-image.png" />
        </div>
      </div>
      
      {/* Question Textbox */}
      <div className={styles.textBoxParent}>
        <div className={styles.textBox}>
          <div className={styles.textBoxChild}>
            <div className={styles.whereAreYou}>Where are you from? Did you enjoy growing up there? Why or why not?</div>
          </div>
        </div>
      </div>

      {/* Yu Big Speak Section */}
      <div className={styles.groupYuBigSpeakParent}>
        <img className={styles.groupYuBigSpeakIcon} alt="Yu Big" src="Yu-big.svg" />
        <img className={styles.rectangleIcon} alt="Rectangle 49" src="Rectangle 49.svg" />
        <img className={styles.rectangleIcon} alt="Rectangle 50" src="Rectangle 50.svg" />
      </div>

      {/* Question Progress */}
      <div className={styles.question112Parent}>
        <div className={styles.question112}>Question 1/12</div>
      </div>

      {/* Textarea and Mic Section */}
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupChild}>
            <textarea className={styles.textarea} placeholder="Type your answer here..." />
            <div className={styles.groupItem}>
              <img className={styles.groupInner} alt="Mic Icon" src="mic.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestionsQ1;
