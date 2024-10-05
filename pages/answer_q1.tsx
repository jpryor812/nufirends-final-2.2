import type { NextPage } from 'next';
import Head from 'next/head';

const AnswerQ1: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Answer the first question of twelve from your AI companion to get matched with friends" />
        <title>Answer Question One</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
        <header className="header">
          <div className="left_header">
            <span className="nufriends_text">nufriends</span> 
            <img src='/robot-header-image (3).svg' alt='robot header image' className="robot_header_image"/>
        </div>    
          <div className="question_main">
            <div className="question_container">
              <h1 className="question_one">Where are you from? Did you enjoy growing up there? Why or why not?</h1>
            </div>
               <img src='/Group-Yu-big-speak.svg' alt='big Yu questions' className="big_yu_questions" />
                   <h2 className= "question_counter">Question 1 of 12</h2>
                    <div className="answer_question_container">
                      <div className="answer_question_text_box">
                        <div className="answer_question_text" contentEditable="true" data-placeholder="Click here to start typing...">
                        </div>
                      </div>    
                      <div className="text_box_buttons">
                        <img src='/mic.svg' alt='mic' className='mic_button'/>
                        <img src='/next_button.svg' alt='next_button' className='text_next_button'/>
                      </div>  
                    </div>  
          </div> 
        </header> 
         
    </>
 );
};

export default AnswerQ1;          

