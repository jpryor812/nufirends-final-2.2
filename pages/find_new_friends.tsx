import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const FindNewFriends = () => {
  const router = useRouter();

  const handleTalkToYuClick = () => {
    router.push('/talking_to_yu');
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
              <div className="message_list">
                <p className="filter_header">Filters</p>
                <p className="filter_instructions">Feel free to look up friends by name, use the filters to look for specific friends, or just keep the filters blank and search for everyone!</p>
                <div className="suggest_changes_container">
                <div className={"suggestion_text_box"} contentEditable={true}>
                  Type your suggestions here...
                </div>
                <button className="suggest_changes_button">Suggest Changes</button>
                </div>
                <div className="filter_container">
                  <div className="send_message_button_container">
                  <p className="send_message_relationship_text">Send Message</p>
                  <img src= '/incoming_envelope.png' alt='incoming envelope' className='send_message_envelope' />
                </div>
                  <div className="send_message_button_container">
                  <p className="send_message_relationship_text">Send Message</p>
                  <img src= '/incoming_envelope.png' alt='incoming envelope' className='send_message_envelope' />
                  </div>
                  <div className="send_message_button_container">
                  <p className="send_message_relationship_text">Send Message</p>
                  <img src= '/incoming_envelope.png' alt='incoming envelope' className='send_message_envelope' />
                  </div>
                    <div className="Find_My_Friends_Button_Container">
                    <div className="find_my_friends_text">Find my friends</div>
                      <img src = '/hand-emoji.svg' alt='hand emoji' className='button_hand_emoji'/>
                    </div>
                </div> 
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

export default FindNewFriends;
