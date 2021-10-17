import React from 'react';
import ChatFeed from './ChatFeed';
import Message from './Message';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import { IconContext } from "react-icons";

import './Chat-UI/Chat.scss'

function Watsapp() {
  return (
    <div className='chat_container'>
           <IconContext.Provider
        value={{ color: "var(--secondary_dark)",
         className: "icons" }}
      >
      <AiOutlineDoubleRight/>
      </IconContext.Provider>
      <ChatFeed />
      <Message />
    </div>
  )
}

export default Watsapp;




