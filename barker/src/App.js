import React, { Component, Ref} from 'react';
import ReactSwipe from 'react-swipe';
import DogCard from './Components/Main/DogCard';
import Chat from './Components/Chat/Chat';
import Matches from './Components/Chat/Matches';
import './App.css';
import NavBar from './Components/Main/NavBar';
import ChatNav from './Components/Chat/ChatNav';
import ControlPanel from './Components/Main/ControlPanel';
import MainView from './Components/Main/MainView';
import ChatView from './Components/Chat/ChatView';
import DogNav from './Components/Chat/DogNav';


export default class App extends Component {
  
  render() {
    return (
      <div style={styles}>
          <MainView />
          <hr/>
          <ChatView />
          <DogNav />
          <Chat/>
      </div>
    );
  }
}

const styles = {
  // height: '100vh',
  width: '100vw',
  padding: '10px'
}
