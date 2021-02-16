import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
   <Chat
   name="Baadshah"
   message="Hello fan!!"
   timestamp="20 seconds ago"
   profilePic="https://static.toiimg.com/photo/63264644.cms"
   />
     <Chat
   name="Elon Musk"
   message="yo tesla!!"
   timestamp="40 seconds ago"
   profilePic="https://www.goodreadbiography.com/wp-content/uploads/2019/03/Elon-Musk-Elon-Musk-Biography-Elon-Musk-Biography-and-Profile-Engineer-Explorer-Inventor-South-African-American-Entrepreneur-Businessman.jpg"
  />
    </div>
  )
}

export default Chats
