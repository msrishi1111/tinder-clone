import React, { useState ,useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import axios from './axios';
import { useDispatch } from "react-redux";
function TinderCards() {
  const [people, setPeople] = useState([]);
  const dispatch= useDispatch();
  useEffect(() => {
    async function fetchData()
    {
      const req= await axios.get('/tinder/cards');
      setPeople(req.data);
    }
    fetchData();
  }, [])

  const swiped = (direction, personName) => {
    console.log(new TouchEvent('touchstart',{clientX:10,clientY:10}));
    console.log("removing " + personName)
  }
  const outOfFrame = (direction,name) => {
    if(direction==="left")
   {
      dispatch({  type:"reject",
      message:"Rejected"});
   }
   else if(direction==="right")
   {
    dispatch({  type:"like",
    message:"Liked"});
   }
    console.log(name + " left the screen!")
  }
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
      <h3 style={{textAlign:"center", marginTop :"30px"}}>
           <p>You have checked all profiles.</p>
          <p>  Please refresh to get more.</p>
          </h3>
        {
          people.map((person) => (
            <TinderCard
              key={person.name}
              className="swipe"
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={(direction) => outOfFrame(direction,person.name)}
              swiped={true}
            >
            <div
            className="card"
            style={{backgroundImage:`url(${person.imgUrl})`}}>
              <h3>{person.name}</h3>
            </div>
            </TinderCard>
          ))
        }
      </div>
    </div>
  )
}

export default TinderCards;
