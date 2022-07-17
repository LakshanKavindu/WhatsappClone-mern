import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFile from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React, { useState } from 'react';
import './Chat.css';
import axios from './axios';

const Chat = ({messages}) => {
  
  const [Input,setInput] = useState("");

  const sendmessage = async (e)=>{
      e.preventDefault();

      await axios.post("/messages/new",{
        message:Input,
        name: "Demo name",
        timestamp:"just now!",
        recieved: false,
      });

      setInput("");
  }
  
  return (
   
    <div className='chat'>
      <div className="chat_header">
        <Avatar/>
        <div className="chatheader_info">
          <h3>Room name</h3>
          <p>laste seen smth smt</p>
        </div>

        <div className="chatheader_right">
          <IconButton>
            <SearchIcon/>
          </IconButton>
              <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
      
        </div>

      </div>
      

      <div className="chat_body">
          
        {
          messages.map((message)=>(
            <p className={`chat_massage ${message.recieved && 'chat_reciever'}`}>
              <span className='chat_name'>{message.name}</span>
              {message.message}
              <span className='chat_timestamp'>{message.timestamp}</span>
            </p>
          ))
        }
         


       
      </div>

      <div className="chat_footer">
        <InsertEmoticonIcon/>
        <form>
          <input value={Input} onChange={e => setInput(e.target.value)} type="text" name="" id="" placeholder='Type a message' />
          <button onClick={sendmessage} type="submit">Send</button>
        </form>

        <MicIcon/>
      </div>

    </div>
  )
}

export default Chat;