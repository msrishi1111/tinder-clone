import React from 'react';
import './App.css';
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import {BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Snackbar from './Snackbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/chat/:person">
        <Header backButton="/chat"/>
        <ChatScreen/>
        </Route>
        <Route path="/chat">
        <Header backButton="/"/>
         <Chats/>
        </Route>
        <Route path="/">
          <Header/>
        <TinderCards/>
      <SwipeButtons/>
      <Snackbar/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
