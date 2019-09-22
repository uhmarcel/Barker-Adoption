import React, { Component, Ref} from 'react';
import MainView from './Components/MainView';
import ChatView from './Components/ChatView';
import dataJSON from './Assets/data.json';
import './App.css';
<<<<<<< HEAD
=======
import DogNav from './Components/Chat/DogNav';
import LoginView from './Components/LoginView';
>>>>>>> e0c2339f8452d77634f2543c55afc1ad8eebb399


export default class App extends Component {

  state = {
<<<<<<< HEAD
    data: dataJSON,
    currentView: 'main',
    currentDogID: 0
=======
    currentView: 'login'
>>>>>>> e0c2339f8452d77634f2543c55afc1ad8eebb399
  }

  moveTo = (view) => {
    this.setState({ currentView: view });
  }

  setCurrentDogID = () => {
    const size = dataJSON.dogs.length;
    this.setState(prev => ({ currentDogID: (prev.currentDogID + 1) % size }));
  }

  render() {
    const { currentView, currentDogID, data } = this.state;
    return (
      <div style={styles}>
<<<<<<< HEAD
          {currentView === 'main' ? <MainView moveTo={this.moveTo} dogs={data.dogs} dogID={currentDogID} setDogID={this.setCurrentDogID}/> : null}
          {currentView === 'chat' ? <ChatView moveTo={this.moveTo} data={data} /> : null}
=======
          {currentView === 'main' ? <MainView moveTo={this.moveTo} /> : null}
          {currentView === 'login' ? <LoginView moveTo={this.moveTo} /> : null}
          {currentView === 'chat' ? <ChatView moveTo={this.moveTo} /> : null}
>>>>>>> e0c2339f8452d77634f2543c55afc1ad8eebb399
      </div>
    );
  }
}

const styles = {
  height: '100vh',
  width: '100vw'
}
