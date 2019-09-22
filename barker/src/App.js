import React from 'react';
import DogCard from './Components/Main/DogCard';
import './App.css';
import NavBar from './Components/Main/NavBar';

function App() {
  
  return (
    <div style={styles}>
        <NavBar />
        <DogCard />
    </div>
  );
}

export default App;

const styles = {
  // height: '100vh',
  width: '100vw',
  padding: '10px'
}
