import React from 'react'
import Snackba from '@material-ui/core/Snackbar';
import { useDispatch, useSelector } from "react-redux";
function Snackbar() {
  const open = useSelector(state=>state.swipeDetails.open)
  const message=useSelector(state=>state.swipeDetails.message);
  const dispatch=useDispatch();
  const handleClose=()=>{
    dispatch({
      type:"close"
    })
  }
  return (
    <Snackba
        open={open}
        onClose={handleClose}
        autoHideDuration={1000}
      >
        <p className="snackbar">{message}</p>
      </Snackba>
  )
}

export default Snackbar
