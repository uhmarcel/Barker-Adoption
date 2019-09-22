import React, { Component, Ref} from 'react';
import ReactSwipe from 'react-swipe';
import DogCard from './Components/Main/DogCard';
import Chat from './Components/Main/Chat';
import Matches from './Components/Main/Matches';
import './App.css';
import NavBar from './Components/Main/NavBar';
import ControlPanel from './Components/Main/ControlPanel';


export default class App extends Component {
  
  swipeEl = null;

  render() {
    return (
      <div style={styles}>
          <NavBar />
          <ReactSwipe 
            className='carousel'
            swipeOptions={{continues: false}}
            ref={el => (this.swipeEl = el)}
          >
            <div onClick={() => this.swipeEl.next()}>Pane 1</div>
            <div>Pane 2</div>
            <div>Pane 3</div>
          </ReactSwipe>
          <DogCard />

          <ControlPanel />
          {/* <Matches/> */}
          {/* <Chat/> */}
      </div>
    );
  }
}

const styles = {
  // height: '100vh',
  width: '100vw',
  padding: '10px'
}
