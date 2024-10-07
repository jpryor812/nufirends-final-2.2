import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const MessageFriends = () => {
  const router = useRouter();

  const handleTalkToYuClick = () => {
    router.push('/talking_to_yu');
  };  
  const navigateToMessageRoom = () => {
    router.push('/message_room_PC');
  };
  
  useEffect(() => {
    // Set a timeout to add the class after 8 seconds
    const timer = setTimeout(() => {
      const slideUpElement = document.querySelector('.slide-up');
      if (slideUpElement) {
        slideUpElement.classList.add('animation-started');
      }
    }, 8000); // 8 seconds to match your desired timing

    // Cleanup if needed
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs once when the component mounts

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
            <img
              src='talk_to_yu.png'
              alt='talk to yu'
              className="talk_to_yu_header"
              onClick={handleTalkToYuClick}
              style={{ cursor: 'pointer' }}
            />
            <img src='/Duo-emoji.svg' alt='Duo emoji' className='duo_emoji' />
            <img src='/hand-emoji.svg' alt='hand emoji' className='hand_emoji' />
            <img src='/Mail_with_message_emoji.png' alt='mail with message emoji' className='mail_with_message_emoji' />
          </div>
          <div className="person_messaging">
            <div className="full_messaging_page">
              <div className="searching_for_friends_side">
                <div className='slide-off'>
                   <img src='/Yu_searching.svg' alt='Yu searching' className="yu_searching" />
                    <div className="searching_for_friends_container">
                      <img src = '/magnifying glass emoji.svg' alt='magnifying glass emoji' className='magnifying_glass_emoji'/>
                      <div className="searching_text">Searching</div>
                    </div>
                    <div className="searching_for_friends_later_text">Estimated Wait Time: 5 Seconds</div>
                </div>
                <div className="slide-up">
                  <img src='/Yu_excited_no_speech.svg' alt='Yu excited' className="yu_excited" />
                  <div className="new_found_friend">
                    <img src= '/Friend_preview_description_new_friend.svg' alt='Friend preview description' className="Friend_preview_description_new_friend" />
                    <img src='/asian_girl_avatar.svg' alt='nufriends Initials Icon' className="new_friend_found_icon" />
                    <p className="new_friend_text">Mac_and_cheese33</p>
                  </div>
                  <div className="message_new_friend_button_container"> 
                    <p className="send_new_friend_message_text">Join the Conversation!</p>
                  </div>
                </div>
                <img src='Yu_new_friend_message.svg' alt='Yu new friend message' className="yu_new_friend_message" />'
               </div>
              <div className="friend_list">
                 <div className="friend_list_header_container">
                   <img src='/hand-emoji.svg' alt='hand emoji' className='hand_emoji' />
                  <div className="message_list_header">Friends</div>
                 </div>   
                <ul style={styles.ul}>
                  <li className="li-style">
                    <img src="/profile-800x800.png" className="Initials_Icon_JP" alt="random profile" />
                      <span className="message_username_unopened">PChakk55</span>
                    <button className="view_relationship_button">View Relationship</button>
                      <div className="friend_message_stats">7 messages</div>
                  </li>
                    <li className="li-style">
                    <img src="/profile3-500x500.png" className="Initials_Icon_JP" alt="fake profile" />
                    <span className="message_username_unopened">AJones01</span>
                      <button className="view_relationship_button">View Relationship</button>
                    <div className="friend_message_stats">7 messages</div>
                  </li>
                    <li className="li-style">
                    <img src="/profile icon 1.jpg" className="Initials_Icon_JP" alt="justin profile" />
                    <span className="message_username_unopened">AD23</span>
                      <button className="view_relationship_button">View Relationship</button>
                    <div className="friend_message_stats">7 messages</div>
                  </li>
                    <li className="li-style">
                    <img src="/profile2-500x500.png" className="Initials_Icon_JP" alt="justin profile" />
                    <span className="message_username_unopened">OnDeck02</span>
                      <button className="view_relationship_button">View Relationship</button>
                    <div className="friend_message_stats">7 messages</div>
                  </li>
                    <li className="li-style">
                    <img src="/justin_profile_picture.jpg" className="Initials_Icon_JP" alt="justin profile" />
                    <span className="message_username_unopened">Jpp123</span>
                      <button className="view_relationship_button">View Relationship</button>
                    <div className="friend_message_stats_opened">8 messages</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

const styles = {
  ul: {
    listStyleType: 'none',
  },
  // Other styles
};

export default MessageFriends;
