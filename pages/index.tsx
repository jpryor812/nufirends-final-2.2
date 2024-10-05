import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';


const LandingPage: NextPage = () => {
    const router = useRouter();

    const handleTalkToYuClick = () => {
      // Navigate to the talking_to_yu page
      router.push('/talking_to_yu');
    };
    
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Find Five New Friends in Five Minutes with nufriends" />
        <title>nufriends</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
        <div className="page_container">
          <header className="header">
            <div className="left_header">
              <span className="nufriends_text">nufriends</span> 
              <img src='/robot-header-image (3).svg' alt='robot header image' className="robot_header_image"/>
            </div>    
            <div className="right_header">
              <img src='talk_to_yu.png' alt='talk to yu' className="talk_to_yu_header" 
                onClick={handleTalkToYuClick}
                style={{cursor:'pointer'}} />
              <img src='/Duo-emoji.svg' alt='Duo emoji' className='duo_emoji'/>
              <img src='/hand-emoji.svg' alt='hand emoji' className='hand_emoji'/>
              <img src='/mail-emoji.svg' alt='mail emoji' className='mail_emoji'/>
            </div>
            <h1 className="never_feel_alone">Never Feel Alone Again</h1>
              <h2 className="find_friends">Find Five New Friends in Five Minutes</h2>
                <h3 className="answer_questions">Answer a few questions to help us get to know you, and then we'll match you with people we feel you'll build a connection with!</h3>
                    <div className="Find_My_Friends_Button_Container">
                    <div className="find_my_friends_text">Find my friends</div>
                    <img src = '/hand-emoji.svg' alt='hand emoji' className='button_hand_emoji'/>
                    </div>  
                  <h4 className="cold_start">Worried about the cold start to the conversation? Your AI Companion, who knows you best, will facilitate that first conversation for you and be with your every step of the way!</h4>
                    <div className="see_how_it_works_container">
                      <p className="see_how_it_works_text">See how it works!</p>
                      <img src='/point-down-emoji.svg' alt='point down emoji' className="point-down-emoji" />
                    </div>
          </header> 
        </div>
     
    </>
 );
};

export default LandingPage;          
       
      
