
import './App.css';
import './Sidebar';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import Pusher from "pusher-js";
import axios from './axios';


function App() {
  const [messages,setmessages] = useState([]);
  useEffect(()=>{
    axios.get("/messages/sync").then((response)=>{

      setmessages(response.data)

    })

  },[])
  useEffect(()=>{
    var pusher = new Pusher('c22d042b41e219edd683', {
      cluster: 'eu'
    });
  
    var channel = pusher.subscribe('messages');
    channel.bind('inserted',(newmessage)=> {
      // alert(JSON.stringify(newmessage));
      setmessages([...messages,newmessage]);
    });


    return ()=>{
        channel.unbind_all();
        channel.unsubscribe();
    };

  },[messages])

  

  return (
    <div className="app">
      <div className="app_body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
     

      

    </div>
  );
}

export default App;
