import React from 'react';
import DogCard from './Components/Main/DogCard';
import Matches from './Components/Main/Matches';
import './App.css';
import NavBar from './Components/Main/NavBar';
import ControlPanel from './Components/Main/ControlPanel';

function App() {
  
  return (
<<<<<<< HEAD
    <div style={styles}>
        <NavBar />
        <DogCard />
        <ControlPanel />
=======
    <div className="App">
        <NavBar/>
        <DogCard/>

        <Matches/>
        <Matches/>
        <Matches/>
>>>>>>> d82a61b805494faa15415cb91f25c4ee72496b4c
        <Matches/>
    </div>
  );
}

export default App;

const styles = {
  // height: '100vh',
  width: '100vw',
  padding: '10px'
}
