import type { NextPage } from 'next';
import styles from './Q1.module.css';

const AnswerQuestionsQ1: NextPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className={styles.nufriendsHeaderFrame}>
        <div className={styles.nufriends}>nufriends</div>
        <img className={styles.robotHeaderImageIcon} alt="Robot Header" src="robot-header-image.png" />
      </div>
      
      {/* Question Textbox */}
      <div className={styles.textBoxParent}>
        <div className={styles.textBox}>
          <div className={styles.textBoxChild} />
          <div className={styles.whereAreYou}>Where are you from? Did you enjoy growing up there? Why or why not?</div>
        </div>
      </div>

      {/* Yu Big Speak Section */}
      <div className={styles.groupYuBigSpeakParent}>
        <img className={styles.groupYuBigSpeakIcon} alt="Yu Big Speak" src="Group Yu-big-speak.svg" />
        <img className={styles.rectangleIcon} alt="Rectangle 49" src="Rectangle 49.svg" />
        <img className={styles.rectangleIcon} alt="Rectangle 50" src="Rectangle 50.svg" />
        <div className={styles.yuBig}>
          <img className={styles.yuBigIcon} alt="Yu Big" src="Yu-big.svg" />
        </div>
      </div>

      {/* Question Progress */}
      <div className={styles.question112Parent}>
        <div className={styles.question112}>Question 1/12</div>
      </div>

      {/* Textarea and Mic Section */}
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.textarea}>{`<textarea>`}</div>
            <img className={styles.micIcon} alt="Mic Icon" src="mic.svg" />
            <div className={styles.groupItem} />
            <img className={styles.groupInner} alt="Arrow" src="Arrow 1.svg" />
          </div>
        </div>
      </div>

      {/* Spacing Div */}
      <div className={styles.frameDiv} />
    </div>
  );
};

export default AnswerQuestionsQ1;
