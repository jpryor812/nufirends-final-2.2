import type { NextPage } from 'next';
import styles from './landing-page.module.css'; 


const LandingPageFinal:NextPage = () => {
  	return (
    		<div className={styles.landingPageFinal}>
      			<div className={styles.header}>
        				<div className={styles.rightHeader}>
          					<div className={styles.duoEmojiFrame}>
            						<img className={styles.duoEmojiIcon} alt="" src="Duo-emoji.svg" />
          					</div>
          					<div className={styles.handEmojiHeader}>
            						<img className={styles.handEmojiIcon} alt="" src="hand-emoji.svg" />
          					</div>
          					<div className={styles.mailEmojiFrame}>
            						<div className={styles.mailEmoji}>
              							<div className={styles.mailEmojiIcon}>
                								<img className={styles.mailEmojiIcon} alt="" src="mail-emoji.svg" />
                								<div className={styles.mailEmoji2} />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.nufriendsHeaderFrame}>
          					<div className={styles.nufriends}>nufriends</div>
          					<img className={styles.robotHeaderImageIcon} alt="" src="robot-header-image.svg" />
        				</div>
      			</div>
      			<div className={styles.neverFeelAlone}>Never Feel Alone Again</div>
      			<div className={styles.landingPageFinalChild} />
      			<div className={styles.findFiveFriends}>Find Five Friends in Five Minutes</div>
      			<div className={styles.landingPageFinalItem} />
      			<i className={styles.answerAFewContainer}>
        				<p className={styles.answerAFew}>{`Answer a few questions to help us get to know you, and then we’ll match you with people we `}</p>
        				<p className={styles.answerAFew}>feel you’ll build a connection with!</p>
      			</i>
      			<div className={styles.landingPageFinalInner} />
      			<div className={styles.findMyFriendsButtonFrame}>
        				<div className={styles.findMyFriendsButtonFrameChild} />
        				<div className={styles.findMyFriendsButtonFrameItem} />
        				<div className={styles.findMyFriendsButton}>
          					<div className={styles.findMyFriendsButtonChild} />
          					<img className={styles.handEmojiOnButtonIcon} alt="" src="hand-emoji-on-button.svg" />
          					<b className={styles.findMyFriends}>Find My Friends</b>
        				</div>
      			</div>
      			<div className={styles.landingPageFinalInner} />
      			<i className={styles.worriedAboutTheContainer}>
        				<p className={styles.answerAFew}>{`Worried about the cold start to the conversation? Your AI Companion, who knows you best, `}</p>
        				<p className={styles.answerAFew}>will facilitate that first conversation for you and be with you every step of the way!</p>
      			</i>
      			<div className={styles.landingPageFinalChild1} />
      			<div className={styles.seeHowItWorksParent}>
        				<div className={styles.seeHowIt}>{`See how it works! `}</div>
        				<img className={styles.pointDownEmojiIcon} alt="" src="point-down-emoji.svg" />
      			</div>
    		</div>);
};

export default LandingPageFinal;
