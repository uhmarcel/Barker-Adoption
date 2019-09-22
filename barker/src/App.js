import React from 'react';
import DogCard from './Components/Main/DogCard';
import Chat from './Components/Main/Chat';
import Matches from './Components/Main/Matches';
import './App.css';
import NavBar from './Components/Main/NavBar';
import ControlPanel from './Components/Main/ControlPanel';

function App() {
  
  return (
    <div style={styles}>
        <NavBar />
        <DogCard />
        <ControlPanel />
        <Matches/>
        <Chat/>
    </div>
  );
}

export default App;

const styles = {
  // height: '100vh',
  width: '100vw',
  padding: '10px'
}
