import React, { Component } from 'react';
import NavBar from './NavBar';
import DogCard from './DogCard';
import ControlPanel from './ControlPanel';
import ChatControlPanel from './ChatControlPanel';

export default class MainView extends Component {

    render() {
        const { moveTo } = this.props;
        return (
            <div>
                <NavBar moveTo={moveTo} />
                <DogCard />
                <ControlPanel />
                <ChatControlPanel/>
            </div>
        );
    }

}