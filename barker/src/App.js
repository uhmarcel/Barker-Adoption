import React, { Component, Ref} from 'react';
import MainView from './Components/MainView';
import ChatView from './Components/ChatView';
import dataJSON from './Assets/data.json';
import LoginView from './Components/LoginView';
import DogView from './Components/DogView';
import './App.css';


export default class App extends Component {

  state = {
    data: dataJSON,
    currentView: 'login',
    currentDogID: 0,
    matches: []
  }

  addMatch = (id) => {
    let array = this.state.matches;
    array.push(id);
    this.setState({matches: array});
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
    console.log(currentView);
    return (
      <div style={styles}>      
          {currentView === 'main' ? <MainView moveTo={this.moveTo} dogs={data.dogs} dogID={currentDogID} setDogID={this.setCurrentDogID} addMatch={this.addMatch} /> : null}
          {currentView === 'chat' ? <ChatView moveTo={this.moveTo} data={data} matches={this.state.matches} /> : null}
          {currentView === 'login' ? <LoginView moveTo={this.moveTo} /> : null}
          {currentView === 'dog' ? <DogView moveTo={this.moveTo} /> : null}
      </div>
    );
  }
}

const styles = {
  height: '100vh',
  width: '100vw'
}
