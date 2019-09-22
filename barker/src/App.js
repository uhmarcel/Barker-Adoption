import React, { Component, Ref} from 'react';
import MainView from './Components/MainView';
import ChatView from './Components/ChatView';
import './App.css';
import DogNav from './Components/Chat/DogNav';
import LoginView from './Components/LoginView';


export default class App extends Component {

  state = {
    currentView: 'login'
  }

  moveTo = (view) => {
    this.setState({ currentView: view });
  }

  render() {
    const { currentView } = this.state;
    return (
      <div style={styles}>
          {currentView === 'main' ? <MainView moveTo={this.moveTo} /> : null}
          {currentView === 'login' ? <LoginView moveTo={this.moveTo} /> : null}
          {currentView === 'chat' ? <ChatView moveTo={this.moveTo} /> : null}
      </div>
    );
  }
}

const styles = {
  // height: '100vh',
  width: '100vw',
  padding: '10px'
}
