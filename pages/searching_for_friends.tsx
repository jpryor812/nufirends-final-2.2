import type { NextPage } from 'next';
import Head from 'next/head';

const SearchingForFriends: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Searching for friends" />
        <title>nufriends</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
        <div className="page_container">
          <header className="header">
            <div className="left_header">
              <span className="nufriends_text">nufriends</span> 
              <img src='/robot-header-image.png' alt='robot header image' className="robot_header_image"/>
            </div>
             <img src='/Yu_searching.svg' alt='Yu searching' className="yu_searching" />
              <div className="searching_for_friends_container">
                <img src = '/magnifying glass emoji.svg' alt='magnifying glass emoji' className='magnifying_glass_emoji'/>
                <div className="searching_text">Searching</div>
              </div>  
                  <h1 className="number_of_friends_found">Found 1/5 Friends so far...</h1>
                   <h2 className="friends_list">Friends List</h2>       
                    <div className="searching_friends_list_container">
                      <img src='/Initials-Icon-JP.svg' alt='nufriends Initials Icon' className="Initials_Icon_JP" />
                      <p className="Jpp_text">Jpp123</p>
                    </div>
          </header> 
        </div>
     
    </>
 );
};

export default SearchingForFriends;          
       
      
