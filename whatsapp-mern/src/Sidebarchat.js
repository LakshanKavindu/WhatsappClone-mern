import { Avatar } from '@mui/material';
import React from 'react';
import './sidebarchat.css';

function Sidebarchat() {
  return (
      <div className="sidebarchat">
        <Avatar/>
        <div className="sidebarchat_info">
            <h2>Room name</h2>
             <p>this is the last msg</p>
        </div>
      </div>
  )
}

export default Sidebarchat