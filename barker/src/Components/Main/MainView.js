import React, { Component } from 'react';
import NavBar from './NavBar';
import DogCard from './DogCard';
import ControlPanel from './ControlPanel';
import ChatControlPanel from './ChatControlPanel';

export default class MainView extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <DogCard />
                <ControlPanel />
                <ChatControlPanel/>
            </div>
        );
    }

}