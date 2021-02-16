
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css";
import {Link,useHistory} from "react-router-dom";
import { Tooltip } from "@material-ui/core";
function Header({backButton}) {
  const history=useHistory();
  return (
    <div className="header">
      {backButton?(
      <IconButton onClick={()=>{history.replace(backButton)}}> <ArrowBackIosIcon fontSize="large" className="header__icon"/> </IconButton>)
      :(
        <Tooltip title="Profile" placement="left">
      <IconButton> <PersonIcon fontSize="large" className="header__icon"/> </IconButton>
      </Tooltip>
      )
}
      <Link to="/">
      <img
      className="header__logo"
    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
    alt=""
    />
      </Link>
      <Link to="/chat">
      <Tooltip title="Chat" placement="right">
      <IconButton> <ForumIcon fontSize="large" className="header__icon"/> </IconButton>
      </Tooltip>
      </Link>
    </div>
  )
}

export default Header
