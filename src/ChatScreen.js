import { Avatar } from "@material-ui/core";
import React, { useState ,useRef,useEffect } from 'react'
import './ChatScreen.css';
function ChatScreen() {
  const [input,setInput]=useState("");
  const[messages,setMessages]=useState([
    {
      name:'Baadshah',
      image:'https://static.toiimg.com/photo/63264644.cms',
      message:'How r u doing?'
    },
    {
    message:"Rushing to filmcity"
    },
    {
      name:'Baadshah',
      image:'https://static.toiimg.com/photo/63264644.cms',
      message:'Ohh Great!!'
    }
  ])
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };
  const handleSend=(e)=>{
    if(input)
    {
    e.preventDefault();
    setMessages([...messages,{message:input}]);
    setInput("");
    }
    else
    {
      e.preventDefault();
    }
  }
  return (
    <div className="chatScreen">
    <p className="chatScreen__timestamp">You matched with Gouri on 23/09/20</p>
    <div className="chatScreen_messages">
    {
      messages.map((message)=>(
         message.name ? (
        <div className="chatScreen__message">
           <Avatar className="chatScreen__image" src={message.image} alt={message.name}/>
      <p className="chatScreen__text">{message.message}</p>
      <AlwaysScrollToBottom/>
        </div>)
        :
        (
          <div className="chatScreen__message">
        <p className="chatScreen__textUser">{message.message}</p>
        <AlwaysScrollToBottom/>
          </div>)
      ))
    }
    </div>
    <form className="chatScreen__input">
      <input value={input}
      autoFocus={true}
      onChange={
        (e)=>{
           setInput(e.target.value)
        }
      }
      className="chatScreen__inputField" placeholder="Type a message"></input>
      <button
      className="chatScreen__inputButton"
      onClick={handleSend}
      >SEND</button>
    </form>
    </div>
  )
}

export default ChatScreen
