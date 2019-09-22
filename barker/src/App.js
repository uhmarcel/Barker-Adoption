import React from 'react';
import DogCard from './Components/Main/DogCard';
import Matches from './Components/Main/Matches';
import './App.css';
import NavBar from './Components/Main/NavBar';

function App() {
  
  return (
    <div className="App">
        <DogCard/>

        <Matches/>
        <Matches/>
        <Matches/>
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
