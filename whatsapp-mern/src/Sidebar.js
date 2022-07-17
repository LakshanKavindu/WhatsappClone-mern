import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// import components

import Sidebarchat from './Sidebarchat';



const  Sidebar= () => {
  return (
    <div className='sidebar'>
     
      <div className="sidebar_header">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU'></Avatar>
        <div className="sidebar_headerright">
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
       
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchcontainer">
            <SearchIcon/>
            <input type="text" name="" id="" placeholder='search here..'/>
        </div>
      </div>

      <div className="sidebar_chats">
            <Sidebarchat/>
            <Sidebarchat/>
            <Sidebarchat/>
      </div>
    </div>
  )  
}

export default Sidebar;