
import "./SwipeButtons.css";
import React from 'react';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StartRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { useDispatch } from "react-redux";
function SwipeButtons() {
  const dispatch= useDispatch();
  return (
      <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="small" />
      </IconButton >
      <IconButton onClick={()=>{
  dispatch({  type:"reject",
  message:"Rejected"})
}} className="swipeButtons__left">
        <CloseIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StartRateIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={()=>
      {
      dispatch({  type:"like",
      message:"Liked"})
 } }  className="swipeButtons__right">
        <FavoriteIcon fontSize="small" />
      </IconButton>
      <IconButton  className="swipeButtons__lightening">
        <FlashOnIcon fontSize="small" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
