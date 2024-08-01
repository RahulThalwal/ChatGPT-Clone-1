import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg'

import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';

function App() {
const [input,setInput] = useState("");




  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (

    <div className='App'>
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new Chat" className="addbtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" className="" />What is Pregramming ? </button>
            <button className="query"><img src={msgIcon} alt="Query" className="" />How to use an API </button>

          </div>

        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className='txt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus accusantium alias velit, maiores quasi omnis corporis assumenda nisi dolorum aspernatur?</p>

          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className='txt'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quisquam molestiae quam quia voluptatibus. Nam nihil ipsum at voluptatem, dolorem maiores error ut doloribus, ab atque nisi maxime! Omnis culpa libero facilis vero veniam earum natus pariatur voluptatem quas reiciendis commodi consequatur nulla esse nisi explicabo, blanditiis quia cumque id quae vitae ut tempore numquam? Ex molestiae porro dignissimos, nulla aliquid ratione. Dolore sapiente unde itaque! Tempore iure itaque, veniam sapiente incidunt rerum doloribus! Aliquam perspiciatis tempore ea quae cum vitae repellendus dolore, ullam officia totam consectetur provident blanditiis fugiat dignissimos ab iste, possimus distinctio officiis quasi amet placeat ipsa.</p>

          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type='text' placeholder='Send  a message' value={input} onChange={(e)=> {setInput(e.target.value)}} name='' id='' /> <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
          </div>
          <p> ChatGPT may produce inaccurate informtio about people, places or facts. ChatGPT August 20 Version </p>


        </div>
      </div>
    </div>


  );
}

export default App