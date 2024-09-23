import type { NextPage } from 'next';
import styles from './index.module.css';


const AnswerQuestionsQ:NextPage = () => {
  	return (
    		<div className={styles.answerQuestionsQ1}>
      			<div className={styles.answerQuestionsQ1Child} />
      			<div className={styles.nufriendsHeaderFrame}>
        				<div className={styles.nufriends}>nufriends</div>
        				<img className={styles.robotHeaderImageIcon} alt="" src="robot-header-image.svg" />
      			</div>
      			<div className={styles.answerQuestionsQ1Item} />
      			<div className={styles.textBoxWrapper}>
        				<div className={styles.textBox}>
          					<div className={styles.textBoxChild} />
          					<div className={styles.whereAreYou}>Where are you from? Did you enjoy growing up there? Why or why not?</div>
            						</div>
            						</div>
            						<div className={styles.yuBigSpeakWrapper}>
              							<img className={styles.yuBigSpeak} alt="" src="Yu big Speak.svg" />
            						</div>
            						<div className={styles.question112Wrapper}>
              							<div className={styles.question112}>Question 1/12</div>
            						</div>
            						<div className={styles.answerQuestionsQ1Inner}>
              							<div className={styles.groupWrapper}>
                								<div className={styles.rectangleParent}>
                  									<div className={styles.groupChild} />
                  									<div className={styles.textarea}>{`<textarea>`}</div>
                  									<img className={styles.micIcon} alt="" src="mic.svg" />
                  									<div className={styles.groupItem} />
                  									<img className={styles.groupInner} alt="" src="Arrow 1.svg" />
                								</div>
              							</div>
            						</div>
            						<div className={styles.frameDiv} />
            						</div>);
          					};
          					
          					export default AnswerQuestionsQ;
          					
