import React, { Component, Ref} from 'react';
import MainView from './Components/MainView';
import ChatView from './Components/ChatView';
import dataJSON from './Assets/data.json';
import LoginView from './Components/LoginView';
import './App.css';


export default class App extends Component {

  state = {
    data: dataJSON,
    currentView: 'main',
    currentDogID: 0
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
          {currentView === 'main' ? <MainView moveTo={this.moveTo} dogs={data.dogs} dogID={currentDogID} setDogID={this.setCurrentDogID}/> : null}
          {currentView === 'chat' ? <ChatView moveTo={this.moveTo} data={data} /> : null}
          {currentView === 'login' ? <LoginView moveTo={this.moveTo} /> : null}
      </div>
    );
  }
}

const styles = {
  height: '100vh',
  width: '100vw'
}
